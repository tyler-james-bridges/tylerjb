import { test, expect } from '@playwright/test';
import { PAGES, NAV_PAGES, stubContactApi } from './helpers';

test.describe('page availability', () => {
  for (const path of PAGES) {
    test(`${path} responds 200 and renders an h1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response, `no response for ${path}`).not.toBeNull();
      expect(response!.status()).toBe(200);
      await expect(page.locator('h1').first()).toBeVisible();
    });
  }

  test('/services returns 404 (route removed)', async ({ page }) => {
    const response = await page.goto('/services');
    expect(response).not.toBeNull();
    expect(response!.status()).toBe(404);
  });
});

test.describe('navigation', () => {
  for (const path of NAV_PAGES) {
    test(`nav link reaches ${path}`, async ({ page }) => {
      // Start somewhere other than the destination so the click is meaningful.
      await page.goto(path === '/' ? '/about' : '/');

      // Desktop renders a sidebar nav; mobile hides links behind a hamburger
      // drawer. The hamburger only renders on mobile viewports, so open the
      // drawer whenever the button is present.
      const menuButton = page.getByRole('button', { name: 'Open menu' });
      const onMobile = await menuButton.isVisible();
      if (onMobile) {
        await menuButton.click();
      }
      // On mobile, scope to the drawer so the click isn't intercepted by the
      // drawer backdrop overlaying the top bar.
      const navScope = onMobile
        ? page.getByRole('navigation', { name: 'Mobile menu' })
        : page.getByRole('navigation');
      const navLink = navScope.locator(`a[href="${path}"]:visible`).first();
      await expect(navLink).toBeVisible();
      await navLink.click();

      await expect(page).toHaveURL(
        path === '/' ? /\/$/ : new RegExp(`${path}(/.*)?$`)
      );
      await expect(page.locator('h1').first()).toBeVisible();
    });
  }
});

test.describe('contact form', () => {
  test('required-field validation blocks an empty submit', async ({
    page,
  }) => {
    const api = await stubContactApi(page);
    await page.goto('/contact');

    const form = page.locator('form').first();
    await expect(form).toBeVisible();
    await form.locator('button[type="submit"]').click();

    // Native constraint validation should stop submission client-side.
    const firstRequired = form.locator('[required]').first();
    await expect(firstRequired).toHaveJSProperty('validity.valueMissing', true);
    await expect(page).toHaveURL(/\/contact/);
    expect(api.postAttempted(), 'empty form must not POST /api/contact').toBe(
      false
    );
  });

  test('a valid submission posts to /api/contact (stubbed)', async ({
    page,
  }) => {
    const api = await stubContactApi(page);
    await page.goto('/contact');

    const form = page.locator('form').first();
    await form.locator('input[name="name"]').fill('Playwright Smoke Test');
    await form.locator('input[name="email"]').fill('smoke@example.com');
    const select = form.locator('select[name="purpose"]');
    if (await select.count()) {
      await select.selectOption({ index: 1 });
    }
    const message = form.locator('textarea[name="message"]');
    if (await message.count()) {
      await message.fill('Automated smoke test — request stubbed, not sent.');
    }
    await form.locator('button[type="submit"]').click();

    await expect
      .poll(() => api.postAttempted(), { timeout: 5_000 })
      .toBe(true);
  });
});

test.describe('homepage health', () => {
  test('no console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() !== 'error') return;
      // Vercel Analytics only serves its script when deployed on Vercel;
      // locally/CI it 404s. Not a site bug — ignore that one resource.
      const source = `${msg.location().url} ${msg.text()}`;
      if (source.includes('_vercel/insights')) return;
      errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors, `console errors: ${errors.join('\n')}`).toEqual([]);
  });

  test('all internal links resolve', async ({ page, request }) => {
    await page.goto('/');

    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((anchors) =>
        anchors.map((a) => (a as HTMLAnchorElement).getAttribute('href') ?? '')
      );
    const paths = [
      ...new Set(
        hrefs
          .map((href) => href.split('#')[0].split('?')[0])
          .filter((href) => href.length > 0)
      ),
    ];
    expect(paths.length).toBeGreaterThan(0);

    for (const path of paths) {
      const response = await request.get(path);
      expect(
        response.status(),
        `${path} should resolve without an error status`
      ).toBeLessThan(400);
    }
  });
});

test.describe('metadata', () => {
  test('every page has a unique title and a meta description', async ({
    page,
  }) => {
    const titles = new Map<string, string>();

    for (const path of PAGES) {
      await page.goto(path);

      const title = await page.title();
      expect(title.trim(), `${path} should have a non-empty <title>`).not.toBe(
        ''
      );

      const description = page.locator('meta[name="description"]');
      await expect(
        description,
        `${path} should have a meta description`
      ).toHaveAttribute('content', /\S/);

      const clash = titles.get(title);
      expect(
        clash,
        `duplicate <title> "${title}" on ${path} (already used by ${clash})`
      ).toBeUndefined();
      titles.set(title, path);
    }
  });
});

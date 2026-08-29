import { test, expect } from '@playwright/test';
import { PAGES } from './helpers';

test.describe('accessibility basics', () => {
  test('html element declares a language', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', /\w+/);
  });

  test('hero identifies the site owner', async ({ page }) => {
    await page.goto('/');
    // Structure over copy: the page introduces Tyler somewhere prominent.
    // Filter to visible matches — the desktop sidebar also contains the name
    // but is display:none on mobile viewports.
    await expect(
      page.getByText(/Tyler/i).filter({ visible: true }).first(),
      'homepage should visibly mention Tyler'
    ).toBeVisible();
  });

  for (const path of PAGES) {
    test(`${path} images all have alt attributes`, async ({ page }) => {
      await page.goto(path);

      const missingAlt = await page
        .locator('img:not([alt])')
        .evaluateAll((imgs) =>
          imgs.map(
            (img) =>
              (img as HTMLImageElement).src || img.outerHTML.slice(0, 120)
          )
        );
      expect(
        missingAlt,
        `images without alt on ${path}: ${missingAlt.join(', ')}`
      ).toEqual([]);
    });
  }

  test('visible navigation links have accessible names', async ({ page }) => {
    await page.goto('/');

    const navLinks = page.getByRole('navigation').locator('a:visible');
    const count = await navLinks.count();
    expect(count, 'expected visible nav links').toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
      const name = await link.evaluate(
        (el) =>
          el.getAttribute('aria-label') ||
          el.textContent?.trim() ||
          el.querySelector('img')?.getAttribute('alt') ||
          ''
      );
      expect(
        name,
        `nav link ${await link.getAttribute('href')} needs an accessible name`
      ).not.toBe('');
    }
  });

  test('primary navigation stays concise and on one row', async ({ page }) => {
    await page.goto('/');

    const primary = page.getByRole('navigation', {
      name: 'Primary navigation',
    });
    const links = primary.locator('.desktop-nav a');

    await expect(links).toHaveText([
      'Work',
      'Projects',
      'Drums',
      'About',
      'Contact',
    ]);
    await expect(primary.getByRole('link', { name: 'Drums' })).toBeVisible();

    const rowPositions = await links.evaluateAll((items) =>
      items.map((item) => Math.round(item.getBoundingClientRect().top))
    );
    expect(new Set(rowPositions).size).toBe(1);
  });

  test('theme control supports System, Light, and Dark', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');

    const theme = page.getByRole('combobox', { name: 'Theme' });
    await expect(theme).toHaveValue('system');
    await expect(page.locator('html')).toHaveClass(/dark/);

    await theme.selectOption('light');
    await expect(page.locator('html')).toHaveClass(/light/);

    await theme.selectOption('dark');
    await expect(page.locator('html')).toHaveClass(/dark/);

    await theme.selectOption('system');
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('skip link moves focus to the main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('link', { name: 'Skip to content' })
    ).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main-content')).toBeFocused();
  });

  test('mobile menu manages focus and Escape', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('button', { name: 'Open menu' });
    if (!(await trigger.isVisible())) return;

    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog', { name: 'Site menu' })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Close menu' })
    ).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Site menu' })).toHaveCount(
      0
    );
    await expect(trigger).toBeFocused();
  });

  test('contact form controls are labelled', async ({ page }) => {
    await page.goto('/contact');

    const controls = page
      .locator('form')
      .first()
      .locator('input:visible, select:visible, textarea:visible');
    const count = await controls.count();
    expect(count, 'expected visible form controls').toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const control = controls.nth(i);
      const labelled = await control.evaluate((el) => {
        if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))
          return true;
        const id = el.getAttribute('id');
        return !!id && !!document.querySelector(`label[for="${id}"]`);
      });
      expect(
        labelled,
        `form control "${await control.getAttribute('name')}" needs a label`
      ).toBe(true);
    }
  });
});

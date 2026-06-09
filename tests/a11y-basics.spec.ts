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
            (img) => (img as HTMLImageElement).src || img.outerHTML.slice(0, 120)
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

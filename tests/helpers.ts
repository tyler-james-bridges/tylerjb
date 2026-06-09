import type { Page } from '@playwright/test';

/** All routes expected to exist on the site. */
export const PAGES = [
  '/',
  '/about',
  '/experience',
  '/projects',
  '/journey',
  '/contact',
  '/drums',
  '/playground',
  '/blog',
] as const;

/** Routes reachable through the primary navigation (sidebar / mobile nav). */
export const NAV_PAGES = [
  '/',
  '/about',
  '/experience',
  '/projects',
  '/blog',
  '/contact',
  '/drums',
] as const;

/**
 * Block any real request to the contact API so tests never hit Resend.
 * Records whether a POST was attempted.
 */
export async function stubContactApi(page: Page): Promise<{
  postAttempted: () => boolean;
}> {
  let attempted = false;
  await page.route('**/api/contact', async (route) => {
    if (route.request().method() === 'POST') {
      attempted = true;
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, stubbed: true }),
    });
  });
  return { postAttempted: () => attempted };
}

import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test.describe('Search Order Test', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Search for order "cor" and validate result', async ({ page }) => {
    await page.getByRole('button', { name: 'Order' }).click();
    await page.getByRole('link', { name: 'List' }).click();

    await page.getByRole('textbox', { name: 'Search customer or order' }).fill('cor');
    await page.keyboard.press('Enter');

    const rows = await page.locator('.minimal__scrollbar__root.css-z78b10 > .simplebar-wrapper > .simplebar-mask > .simplebar-offset').filter({ hasText: 'Cortez Herring' });
    await expect(rows).toHaveCount(1);

    await expect(page.locator('.minimal__scrollbar__root.css-z78b10 > .simplebar-wrapper > .simplebar-mask > .simplebar-offset')).toContainText('Cortez Herring');
  });
});

import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test.describe('Billing Information Test', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Update billing name and payment method', async ({ page }) => {
    await page.getByRole('button', { name: 'User' }).click();
    await page.getByRole('link', { name: 'Account' }).click();
    await page.getByRole('tab', { name: 'Billing' }).click();

    await page.getByRole('button', { name: 'Jayvion Simon' }).click();
    await page.getByRole('button', { name: 'Deja Brady 18605 Thompson' }).click();

    await page.getByRole('button', {name: '**** **** ****'}).click();
    page.getByRole('dialog').locator('div').filter({ hasText: '**** **** ****' }).nth(1)
  });
});
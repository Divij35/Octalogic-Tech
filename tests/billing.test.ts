import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test.describe('Billing Information Test', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.getByRole('button', { name: 'User' }).click();
    await page.getByRole('link', { name: 'Account' }).click();
    await page.getByRole('tab', { name: 'Billing' }).click();
  });

  test('Update billing name', async ({ page }) => {
  await page.getByRole('button', { name: 'Jayvion Simon' }).click();
  await page.getByRole('button', { name: 'Deja Brady 18605 Thompson' }).click();
  await expect(page.getByRole('button', { name: 'Deja Brady' })).toBeVisible();
})

test('Update payment method', async ({page}) =>{
  await page.getByRole('heading', { name: '**** **** **** 1234' }).click()
  await expect(page.getByRole('heading', { name: '**** **** **** 1234' })).toBeVisible();
});
});


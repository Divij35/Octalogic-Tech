import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test.describe('Filter Jobs Test', () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
    });

    test('Filter jobs by status', async ({ page }) => {
        await page.getByRole('button', { name: 'Job' }).click();
        await page.getByRole('link', { name: 'List' }).click();

        await page.getByRole('button', { name: 'Filter' }).click();
        await page.locator('label').filter({ hasText: 'On demand' }).check();
        
        await expect(page.locator('label').filter({ hasText: 'On demand' })).toBeChecked();
    });
});
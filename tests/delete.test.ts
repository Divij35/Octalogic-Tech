import {test, expect} from '@playwright/test';
import {login} from '../helpers/login';

test.describe('Delete: File manager Test', () => {
  test.beforeEach(async ({page}) => {
    await login(page);
  });

  test('Delete an order and validate deletion', async ({page}) => {
    await page.getByRole('link', { name: 'File manager' }).click();
    await page.getByRole('checkbox', { name: 'All row Checkbox' }).check()

    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();

    const verificationText = page.getByText('File manager UploadSelect').locator('div').filter({ hasText: /^No data$/ });
    await expect(verificationText).toBeVisible();
  });
});
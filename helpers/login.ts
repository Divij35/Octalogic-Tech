import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('https://minimals.cc/');
  await page.getByRole('link', {name: 'Sign in'}).click();
  await page.getByRole('textbox', {name: 'Email address'}).fill('demo@minimals.cc');
  await page.getByRole('textbox', {name: 'Password'}).fill('@2Minimal');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForLoadState('load');
}

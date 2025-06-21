import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('https://minimals.cc/');
  await page.getByRole('link', {name: 'Sign in'}).click();
  await page.getByLabel('Email').fill('demo@minimals.cc');
  await page.getByLabel('Password').fill('@2Minimal');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForLoadState('networkidle');
}

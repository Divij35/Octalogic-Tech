import { test, expect } from "@playwright/test";
import { login } from "../helpers/login";

test.describe("Send Chat Messages Test", () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
    })
    test("Sending a chat message to Deja Brady and validating it", async ({ page }) => {
        await page.getByRole('link', { name: 'Chat' }).click();
        await page.getByRole('button', { name: 'Deja Brady 0 Deja Brady You:' }).click();
        
        const message = "Hello, how are you?";
        await page.getByRole('textbox', { name: 'Type a message' }).fill(message);
        await page.keyboard.press('Enter');
        
        const chatMessage = page.locator('.minimal__scrollbar__root.css-1out412 > .simplebar-wrapper > .simplebar-mask > .simplebar-offset > .simplebar-content-wrapper > .simplebar-content').filter({ hasText: message });
        await expect(chatMessage).toBeVisible();
    });
})
import { test, expect } from "@playwright/test";
import { login } from "../helpers/login";

test.describe("Send Chat Messages Test", () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
        await page.getByRole('link', { name: 'Chat' }).click();
    })
    test("Sending a chat message to Deja Brady and validating it", async ({ page }) => {

        // The button should work for both "Deja Brady" and "Deja Brady 0" based on the dynamic nature of the chat system.
        // The regex pattern in the code was not working as expected.
        // await page.getByRole('button', { name: '/(Deja Brady)(\s0)?\s(Deja Brady)(\sYou)?/i' }).click();
        // This button selector is dynamic so this approach was used to handle the task.
        const option1 = page.getByRole('button', { name: 'Deja Brady Deja Brady You:' });
        const option2 = page.getByRole('button', { name: 'Deja Brady 0 Deja Brady You:' });

        await page.waitForTimeout(5000); // Wait for the chat options to load
        if (await option1.isVisible()) {
            await option1.click();
            // console.log('Clicked Deja Brady (option 1)');
        } else if (await option2.isVisible()) {
            await option2.click();
            // console.log('Clicked Deja Brady (option 2)');
        } else {
            throw new Error('Neither Deja Brady options are visible');
        }

        await page.waitForTimeout(2000); // Wait for the chat to load

        const message = "Hello, how are you?";
        await page.getByRole('textbox', { name: 'Type a message' }).fill(message).then(() => {
            page.keyboard.press('Enter');
    });
        
        const chatMessage = page.locator('.minimal__scrollbar__root.css-1out412 > .simplebar-wrapper > .simplebar-mask > .simplebar-offset > .simplebar-content-wrapper > .simplebar-content').filter({ hasText: message });
        await expect(chatMessage).toBeVisible();
    });
})
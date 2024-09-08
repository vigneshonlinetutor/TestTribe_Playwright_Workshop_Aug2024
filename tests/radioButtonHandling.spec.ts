import { test, expect } from '@playwright/test'

test('Radio button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');

    await maleRadioButton.check();
    //Way 1
    expect(await maleRadioButton.isChecked()).toBeTruthy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    //Way 2
    await femaleRadioButton.check();
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).toBeChecked()
});
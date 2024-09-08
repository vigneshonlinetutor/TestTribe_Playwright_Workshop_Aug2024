import { test, expect } from '@playwright/test'

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    await cricketCheckbox.check();
    await moviesCheckbox.check();

    await expect(cricketCheckbox).toBeChecked();
    expect(await moviesCheckbox.isChecked()).toBeTruthy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();
});

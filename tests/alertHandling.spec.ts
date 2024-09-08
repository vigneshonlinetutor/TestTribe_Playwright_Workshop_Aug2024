import { test, expect } from '@playwright/test'

test('Simple Alert Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",async(alert)=>{
        const alertMessge = alert.message();
        expect(alertMessge).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    await page.waitForTimeout(3000);
});

test('Confirm Alert - Ok Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",async(alert)=>{
        const alertMessge = alert.message();
        expect(alertMessge).toEqual('I am a JS Confirm');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.waitForTimeout(3000);
});

// Assignment
// test('Confirm Alert - Cancel Button', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
// });

test.only('Prompt Alert - Ok Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",async(alert)=>{
        const alertMessge = alert.message();
        expect(alertMessge).toEqual('I am a JS prompt');
        await alert.accept("Vignesh");
        await expect(page.locator('#result')).toHaveText('You entered: Vignesh');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.waitForTimeout(3000);
});

// Assignment
// test('Prompt Alert - Cancel Button', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
// });
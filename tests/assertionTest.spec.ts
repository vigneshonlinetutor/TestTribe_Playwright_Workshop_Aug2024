import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Visible/Hidden', async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");
    expect(await page.locator('#displayed-text')).not.toBeVisible();
    await page.locator('#hide-textbox').click();
    expect(await page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    expect(await page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').fill('Playwright');
});

test('Present/NotPresent', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    expect(await page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);
    await page.locator('text=Add Element').click();
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('text=Add Element').click();
    await page.locator('text=Add Element').click();
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(3);
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
});

test('Enabled/Disabled', async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    expect(await page.locator('#home')).toBeEnabled();
    expect(await page.locator('button[title="Disabled button"]')).toBeDisabled();
});

test('Text Match and mismatch', async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    await expect(page.locator('#home')).toHaveText('Goto Home');
    await expect(page.locator('#home')).not.toHaveText('Vignesh');
    await expect(page.locator('button[title="Disabled button"]')).toHaveText('Disabled');
});

test.only('Element Attributes', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder','Username');
    await expect(page.locator('input[name="username"]')).toHaveAttribute('class', /.*oxd-input/)
});

test('URL and Title', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(await page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(await page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Partial URL Assertion
    await expect(page).toHaveURL(/opensource-demo.orangehrmlive/);

    expect(await page.title()).toEqual('OrangeHRM');
    await expect( page).toHaveTitle('OrangeHRM');
    //Partial Title Assertion
    await expect(page).toHaveTitle(/.*Orange/);
});

test('Screenshot', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(await page.locator('input[name="username"]')).toBeVisible();
    await page.locator('input[name="username"]').fill("Vignesh");
    await page.locator('input[name="password"]').fill("Playwright");
    await expect(await page).toHaveScreenshot();
});
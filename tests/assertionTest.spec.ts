import { test, expect } from '@playwright/test';

test('Visible/Hidden', async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");
    expect(page.locator('#displayed-text')).not.toBeVisible();
    await page.locator('#hide-textbox').click();
    expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').fill('Playwright');
});

test('Present/NotPresent', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    expect(page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);
    await page.locator('text=Add Element').click();
    expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('text=Add Element').click();
    await page.locator('text=Add Element').click();
    expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(3);
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
});

test('Enabled/Disabled', async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    expect(page.locator('#home')).toBeEnabled();
    expect(page.locator('button[title="Disabled button"]')).toBeDisabled();
});

test('Text Match and mismatch', async ({ page }) => {
    await page.goto("https://letcode.in/buttons");
    expect(page.locator('#home')).toHaveText('Goto Home');
    expect(page.locator('#home')).not.toHaveText('Vignesh');
    expect(page.locator('button[title="Disabled button"]')).toHaveText('Disabled');
});

test.only('Element Attributes', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder','Username');
    await expect(page.locator('input[name="username"]')).toHaveAttribute('class', /.*oxd-input/);
});

test('URL and Title', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    expect(page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    expect(page).toHaveURL(/opensource-demo.orangehrmlive/);

    expect(page.title()).toEqual('OrangeHRM');
    expect(page).toHaveTitle('OrangeHRM');
    expect(page).toHaveTitle(/.*Orange/);
});

test('Screenshot', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    expect(page.locator('input[name="username"]')).toBeVisible();
    await page.locator('input[name="username]').fill("Vignesh");
    await page.locator('input[name="password"]').fill("Playwright");
    expect(page).toHaveScreenshot();
});

import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button[aria-label="Consent"]').click();
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
  ])
  await newTab.waitForLoadState();
  await newTab.locator('//span[normalize-space()="Downloads"]').click();
  await page.waitForTimeout(5000);
  await newTab.close();
})

test('Single Window Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button[aria-label="Consent"]').click();
  await page.locator('a[href="#Seperate"]').click();
  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="newwindow()"]')
  ])
  await newWindow.waitForLoadState();
  await newWindow.locator('//span[normalize-space()="Downloads"]').click();
  await page.waitForTimeout(2000);
  await newWindow.close();
  await page.waitForTimeout(3000);
})

test.only('Multiple Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button[aria-label="Consent"]').click();
  await page.locator('a[href="#Multiple"]').click();
  const [multipleTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="multiwindow()"]')
  ])

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();
  await pages[1].bringToFront();
  await pages[1].locator('#email').fill('vignesh@playwright.com');
  await page.waitForTimeout(5000);

  await pages[2].waitForLoadState();
  await pages[2].bringToFront();
  await pages[2].locator('//span[normalize-space()="Downloads"]').click();
  await page.waitForTimeout(5000);

  await pages[1].close();
  await pages[2].close();
  await page.waitForTimeout(3000);
})

/*
test('Multiple Window Handling', async ({ page }) => {
  Handling of Multiple window is exactly same as handling multiple tab
  For practice go to this website -> https://www.hyrtutorials.com/p/window-handles-practice.html
})
*/
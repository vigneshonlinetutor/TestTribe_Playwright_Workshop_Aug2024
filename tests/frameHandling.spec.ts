import { test, expect } from '@playwright/test';

test('Issue with Frame', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');
  await page.locator('#tinymce').clear();
  await page.locator('#tinymce').fill('Vignesh');
})

test('Frame Handling Using Page.Frame()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const allFrames = page.frames();
  console.log('Total Frame count '+allFrames.length);
  // Incase of name attribute
  // const frame1 = page.frame({name:'value'});
  const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
  frame1?.locator('input[name="mytext1"]').fill('Vignesh');
  await page.waitForTimeout(3000);
})

test.only('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame2 = page.frameLocator('frame[src="frame_2.html"]');
  frame2?.locator('input[name="mytext2"]').fill('Playwright');
  await page.waitForTimeout(3000);
})

test('Nested Frame Handling', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
})
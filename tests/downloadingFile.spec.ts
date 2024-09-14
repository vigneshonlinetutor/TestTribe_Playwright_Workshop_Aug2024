import { test } from '@playwright/test';

test('Download a PDF file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button[aria-label="Consent"]').click();

  const download = await Promise.all([
    page.waitForEvent('download'),
    await page.locator('//a[@type="button"]').click()
  ])

  const path = await download[0].path();
  console.log('Path ' + path);

  // If wanted to save the file with default fileName
  // await download[0].saveAs(download[0].suggestedFilename());

  // If wanted to save it with specific Name
  await download[0].saveAs('PlaywrightDownloadedFile.pdf');
  await page.waitForTimeout(3000);
});

test('Download a Text file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button[aria-label="Consent"]').click();

  await page.locator('#textbox').click();
  await page.locator('#textbox').pressSequentially('Welcome to the Playwright workshop');
  await page.locator('#createTxt').click();
  await page.locator('#link-to-download').click();

  const download = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#link-to-download').click()
  ])

  await download[0].saveAs(download[0].suggestedFilename());
  await page.waitForTimeout(3000);
});
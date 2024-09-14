import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

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

test('Download to a specific folder', async ({ page }) => {
  const downloadDir = './downloads';

  // Create the download directory if it doesn't exist
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button[aria-label="Consent"]').click();

  await page.locator('#textbox').click();
  await page.locator('#textbox').pressSequentially('Welcome to the Playwright workshop');
  await page.locator('#createTxt').click();

  const download = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#link-to-download').click()
  ]);

  // Get the suggested filename from the download event
  const suggestedFileName = download[0].suggestedFilename();

  // Construct the full file path
  const filePath = path.join(downloadDir, suggestedFileName);

  // Save the file to the specified location
  await download[0].saveAs(filePath);

  // Verify the file was saved correctly
  expect(fs.existsSync(filePath)).toBe(true);
  const fileSize = fs.statSync(filePath).size;
  expect(fileSize).toBeGreaterThan(0);

  console.log(`File downloaded successfully to ${filePath}`);

  await page.waitForTimeout(3000);
});

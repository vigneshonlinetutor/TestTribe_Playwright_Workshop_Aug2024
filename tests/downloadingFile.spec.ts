import { test } from '@playwright/test';

test('Download a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button[aria-label="Consent"]').click();
  

  const download = await Promise.all([
    page.waitForEvent('download'),
    await page.locator('//a[@type="button"]').click()
  ])

  const path = await download[0].path();
  console.log('Path '+path);
  // await page.locator('#textbox').click();
  // await page.locator('#textbox').fill('Welcome to the Playwright workshop');
  // await page.locator('(//div[@class="panel-heading"])[1]').click();
  // await page.locator('#createTxt').click();
  // await page.locator('#link-to-download').click();
  

// await download[0].saveAs(download[0].suggestedFilename());

  await download[0].saveAs('PlaywrightDownloadedFile.pdf');
  await page.waitForTimeout(3000);
});
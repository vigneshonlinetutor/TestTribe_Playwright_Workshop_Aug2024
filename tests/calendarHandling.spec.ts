import { test, expect } from '@playwright/test';
import {DateTime} from 'luxon'

test('Using Fill Method', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  await page.locator('#birthday').fill('1993-10-18');
  await page.waitForTimeout(10000);
});

test.only('Using Luxon', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  
  // Select Past Date
  await page.locator('input[placeholder="Start date"]').click();
  await calendarSelect("18","October 2023");
  await page.waitForTimeout(5000);
  await page.reload();

  // Select Current Month Date
  await page.waitForLoadState();
  await page.locator('input[placeholder="Start date"]').click();
  await calendarSelect("16","September 2024");
  await page.waitForTimeout(5000);
  await page.reload();

  // Select Future Date
  await page.waitForLoadState();
  await page.locator('input[placeholder="Start date"]').click();
  await calendarSelect("18","October 2025");
  await page.waitForTimeout(5000);
  await page.reload();


  async function calendarSelect(date:string, monthYearValue:string) {
    const prevMonthButton = page.locator('(//th[@class="prev"])[1]');
    const nextMonthButton = page.locator('(//th[@class="next"])[1]');
    const monthYear = page.locator('(//th[@class="datepicker-switch"])[1]');
  
    // Month Short form - MM
    // Month Full form - MMMM
    // Year short form - yy
    // Year full form - yyyy
    const formattedMonthDate = DateTime.fromFormat(monthYearValue, "MMMM yyyy");
  
    while(await monthYear.textContent() != monthYearValue){
      if(formattedMonthDate < DateTime.fromJSDate(new Date())){
        await prevMonthButton.click();
      }
      else{
        await nextMonthButton.click();
      }
    }
  
    await page.locator(`//td[@class="day"][text()="${date}"]`).click();
  }
});


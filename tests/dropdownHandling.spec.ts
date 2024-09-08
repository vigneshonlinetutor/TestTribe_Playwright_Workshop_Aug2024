import { test, expect } from '@playwright/test'

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('#Skills',{
        value:'Art Design'
    });
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills',{
        label:'Backup Management'
    });
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills',{
        index:5
    });
    await page.waitForTimeout(3000);
});

test('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select',[
        {value:"California"},
        {label:"Florida"},
        {index:3}
    ])
    await page.waitForTimeout(3000);
});

test('Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[type="search"]').fill('Ind');
    await page.waitForTimeout(3000);
    await page.locator('#select2-country-results>li').click();
    await page.waitForTimeout(3000);
});

test('Non Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('#select2-country-results').locator('li',{hasText:"India"}).click();
    // await page.locator('#select2-country-results>li',{hasText:"India"}).click();
    await page.waitForTimeout(3000);
});

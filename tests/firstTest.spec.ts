import {test,expect} from '@playwright/test'

test('Google Test',async ({page}) => {  
    await page.goto("https://www.google.com/");
    const actualTitle = await page.title();
    const expectedTitle = "Google";
    expect(actualTitle).toEqual(expectedTitle);
})
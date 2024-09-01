import {test,expect} from '@playwright/test'

test('Google Test',async ({page, context}) => {  
    await context.tracing.start({screenshots:true, snapshots:true});

    await page.goto("https://www.google.com/");
    const actualTitle = await page.title();
    const expectedTitle = "Vignesh";
    expect(actualTitle).toEqual(expectedTitle);

    await context.tracing.stop({path:"./test_programattically.zip"});
})
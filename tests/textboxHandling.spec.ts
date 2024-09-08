import {test} from '@playwright/test'

test('Fill Method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123',{force:true});
})

test('Press - Sequentially method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').pressSequentially('Admin');
    await page.locator('input[name="password"]').pressSequentially('admin123');
    await page.locator('input[name="password"]').press('Enter');
})

test('Press - Sequentially method with Delay',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[name="username"]').pressSequentially('Admin',{delay:500});
    await page.locator('input[name="password"]').pressSequentially('admin123',{delay:500});
})
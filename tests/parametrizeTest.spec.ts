import {expect, test} from '@playwright/test'

const credentialData = [
    {
        "username":"Admin",
        "password": "admin123"
    },
    {
        "username":"Admin1",
        "password": "admin1234"
    }
]

credentialData.forEach(creds=>{
    test(`Login with ${creds.username} with ${creds.password}`, async ({page}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await page.locator('input[name="username"]').fill(creds.username);
        await page.locator('input[name="password"]').fill(creds.password);
        await page.locator('button[type="submit"]').click();  
        await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    })
})



import {expect, test} from '@playwright/test'

// test.beforeAll('Before All Hook', async ({}) => {
//   console.log('Before All Hook')
// })

// test.afterAll('After All Hook', async ({}) => {
//   console.log('After All Hook')
// })


test.beforeEach('Before Each Hook', async ({page}) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();  
})

test.afterEach('After Each Hook', async ({page}) => {
  await page.locator('.oxd-userdropdown-tab').click();
  await page.locator('a[href="/web/index.php/auth/logout"]').click();
})

test('Test 1', async ({ page }) => {
  await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

})

test('Test 2', async ({ page }) => {
  await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
})

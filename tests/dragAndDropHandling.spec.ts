import { test, expect } from '@playwright/test';

test('Drag And Drop - Approach 1', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  const washington = page.locator('#box3');
  const unitedStates = page.locator('#box103');
  await washington.hover();
  await page.mouse.down();
  await unitedStates.hover();
  await page.mouse.up();
  await page.waitForTimeout(5000);
});

test('Drag And Drop - Approach 2', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  const washington = page.locator('#box3');
  const unitedStates = page.locator('#box103');
  await washington.dragTo(unitedStates);
  await page.waitForTimeout(5000);
});
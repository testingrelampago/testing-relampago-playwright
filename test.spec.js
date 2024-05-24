const { test, expect } = require("@playwright/test");

test("Open Testing Relámpago and verify title", async ({ page }) => {
  await page.goto("https://testingrelampago.com/");
  const title = await page.title();
  expect(title).toContain("Home");
});

test("Check for 'Servicios' element presence", async ({ page }) => {
    await page.goto("https://testingrelampago.com/");
    const serviciosElement = await page.locator('text="Servicios"');
    await expect(serviciosElement).toBeVisible();
});
  
test("Check for 'Testing' element presence", async ({ page }) => {
    await page.goto("https://testingrelampago.com/");
    const testingElement = await page.locator('text="Testing"');
    await expect(testingElement).toBeVisible();
});
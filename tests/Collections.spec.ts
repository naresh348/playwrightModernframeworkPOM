import { test, expect } from "@playwright/test";

test("collections", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(4000);

    await page.locator("[name='q']").first().fill("laptop");
    await page.keyboard.press("Enter");
    const cards = page.locator(".jIjQ8S");
    await expect(cards.first()).toBeVisible();
    const s=await cards.count()
    console.log(s);

    const productname = await page.locator(".RG5Slk").allInnerTexts();
    console.log(productname)
    const price = await page.locator(".hZ3P6w").allInnerTexts();
    console.log(price)

    

    const productMap = new Map<string, string>();
    for (let i = 0; i < s; i++) {
        
        const card=cards.nth(i);
        

    const shortname = productname.map(name => name.split(" ")[0]);
    console.log(shortname);
    const p = price.map(pri => pri.split(" ")[0]);
    console.log(p);


    }







})
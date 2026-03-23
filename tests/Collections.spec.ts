import { test, expect, chromium } from "@playwright/test";

// test("collections", async ({ page }) => {
//     await page.goto("https://www.flipkart.com/")
//     await page.waitForTimeout(4000);

//     await page.locator("[name='q']").first().fill("laptop");
//     await page.keyboard.press("Enter");
//     const cards = page.locator(".jIjQ8S");
//     await expect(cards.first()).toBeVisible();
//     const s=await cards.count()
//     console.log(s);

//     const productname = await page.locator(".RG5Slk").allInnerTexts();
//     console.log(productname)
//     const price = await page.locator(".hZ3P6w").allInnerTexts();
//     console.log(price)



//     const productMap = new Map<string, string>();
//     for (let i = 0; i < s; i++) {

//         const card=cards.nth(i);


//     const shortname = productname.map(name => name.split(" ")[0]);
//     console.log(shortname);
//     const p = price.map(pri => pri.split(" ")[0]);
//     console.log(p);


//     }


//})

test('page context', async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");
    const [childpage] = await Promise.all([ context.waitForEvent('page')
        ,parentpage.getByRole('button', { name: 'New Tab' }).click()]);

        const page=context.pages(); //use to swtich pages...
        childpage.waitForLoadState();
        console.log(page.length);
        console.log(await page[0].title());
        console.log(await page[1].title());


    await childpage.getByRole('link',{name:'TypeScript For Playwright & Cypress'}).click();

    await parentpage.locator('#PopUp').click();
    console.log(await page[2].title());
    console.log(await page[3].title());


    await parentpage.waitForTimeout(10000);



})


test('alerts', async ({browser}) => {
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");
    parentpage.on('dialog',
        dialog=>{console.log(dialog.type()),
                    console.log(dialog.message())
            dialog.dismiss()}
    );
    

   // await parentpage.locator('#alertBtn').click();
     await parentpage.locator('#confirmBtn').click();
     const msg=parentpage.locator('#demo');
     await expect(msg).toHaveText('You pressed Cancel!');
   
    //parentpage.waitForTimeout(4000);


})


test('Frames', async ({browser}) => {
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://demo.automationtesting.in/Frames.html");
   const frame1=parentpage.frame("SingleFrame");
   if(frame1){
   await frame1.locator("[type='text']:visible").fill("Naresh");
    }
    else
    {
        console.log("frame not available");
    }
})


test('IFrames', async ({browser}) => {
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://demo.automationtesting.in/Frames.html");
    await parentpage.getByRole('link',{name:'Iframe with in an Iframe'}).click();
    console.log(parentpage.frames().length);
    const outerframe =parentpage.frameLocator("iframe[src='MultipleFrames.html']");
    const innerframe=outerframe.frameLocator('iframe');
    if(innerframe)
    {
        await innerframe.locator("[type='text']:visible").fill("naresh");
    }
    else
    {
        console.log("frame not available");

    }
   
    await parentpage.waitForTimeout(2000);
})


test('drag & drop', async ({browser}) => {
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");
    const source =parentpage.locator("#draggable");
    const target = parentpage.locator("#droppable");
    await source.dragTo(target);
    await parentpage.waitForTimeout(2000);

})

test.only('Mouseaction', async ({browser}) => {
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");
   // await parentpage.getByRole('button',{name:'Point Me'}).hover();
   // await parentpage.getByRole('link',{name:'Laptops'}).click();

   // Focus and select text in field1
await parentpage.locator('#field1').click();
await parentpage.locator('#field1').press('Control+A'); // select all
await parentpage.locator('#field1').press('Control+C'); // copy

// Paste into field2
await parentpage.locator('#field2').click();
await parentpage.locator('#field2').press('Control+V'); // paste


    await parentpage.waitForTimeout(2000);

})





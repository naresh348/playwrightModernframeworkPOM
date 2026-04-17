import { chromium, expect, Locator, test } from '@playwright/test';

test.describe('Practise 2', () => {

    test('Button', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Click ' }).click();
        await expect(page.getByRole('button', { name: 'Goto Home' })).toBeVisible();
        await page.getByRole('button', { name: 'Goto Home' }).click();
        await page.goBack();
        await page.waitForTimeout(4000);



    })

    test('input', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Edit ' }).click();
        await expect(page.locator('#fullName')).toBeVisible();
        await page.locator('#fullName').fill('Naresh');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Naresh');
        await page.locator('#fullName').clear();
        await page.waitForTimeout(4000);



    })

    test(' Drop-Down ', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Drop-Down ' }).click();
        await page.locator('#fruits').selectOption({ index: 4 });
        console.log(await page.locator('[class="notification is-success"]').innerText());
        await page.waitForTimeout(4000);




    })

    test(' multiple Drop-Down ', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: '  AUI - 4 ' }).click();
        const list: Locator = page.locator('[class="list-container"] div');
        const list1 = await list.allInnerTexts();
        console.log("before sorted:" + list1);
        const sorted = list1.sort((a, b) => a.localeCompare(b));
        console.log("after sorted:" + sorted);
        const names: string[] = ['Playwright', 'Kurimurai', 'Webdriver.io'];
        for (const n of names) {
            await list.filter({ hasText: n }).click();
        }

    })

    test(' Alerts ', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Dialog ' }).click();
        page.on('dialog', async dialog => {
            console.log(dialog.type(), dialog.message(),);
            await dialog.accept('naresh');
        });
        await page.getByText("Prompt Alert").click();
        console.log(await page.locator('#myName').innerText());




        await page.waitForTimeout(4000);


    })

    test('radio', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Toggle ' }).click();
        await expect(page.locator('#yes')).toBeVisible();
        await page.locator('#yes').click();
        await expect(page.locator('#maybe')).toBeDisabled();


    const checkbox = page.locator('[type="checkbox"]').filter({ hasNotText: 'Remember me' }).first();
    await expect(checkbox).toBeChecked();   



    })


test('frames', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Inner HTML ' }).click();
        await page.frameLocator('#firstFr').getByPlaceholder('Enter name').fill('naresh');
        

        await page.waitForTimeout(4000);
 

    })


    test('tabs', async ({  }) => {
        const browser=await chromium.launch();
        const context=await browser.newContext();
        const page=await context.newPage();

        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' Tabs ' }).click();

        const [child]= await Promise.all([context.waitForEvent('page'),
        page.getByText('Open Home Page').click()]);    
        
        console.log(await child.title());
        console.log(await page.title());


        await page.waitForTimeout(4000);
 

    })

    test('drag adn drop ', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: '     AUI - 2 ' }).click();
        const source=page.locator('#draggable');
        const target=page.locator('#droppable');
        await source.dragTo(target);
        await page.waitForTimeout(7000);


    })


    test.skip('Date picker', async ({ page }) => {
        await page.goto("https://letcode.in/test");
        await page.getByRole('link', { name: ' File management ' }).click();
        await page.locator('[type="file"]').setInputFiles(['Uploads/cccc.txt','Uploads/n.pdf'])
        const filename=await page.locator('.label.ng-star-inserted').innerText();
        console.log(filename.split(': ')[1]);
        console.log(filename);
        await page.waitForTimeout(7000);


    })













})


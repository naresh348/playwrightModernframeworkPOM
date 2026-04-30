import{test,expect}  from '@playwright/test';

// test('fill',async({page})=>{

//     await page.goto('https://uat.ezyhired.com/');
//     await page.getByPlaceholder('jane@company.com').fill('Naresh');
// })

// test('click functionality',async({page})=>{

//     await page.goto('https://uat.ezyhired.com/');
//     await expect(page.getByRole('link',{name:'Forgot password?'})).toBeVisible();
//     await page.getByRole('link',{name:'Forgot password?'}).click();
//     await expect(page).toHaveURL(/forgot-password/i);

// })


// test('Input value validate',async({page})=>{

//     await page.goto('https://uat.ezyhired.com/');
//     await page.getByPlaceholder('jane@company.com').fill('Naresh');
//     const value =await page.getByPlaceholder('jane@company.com').inputValue();
//     console.log(value);
//     await expect(value).toMatch('Naresh');



//  })


//  test('Validate error message',async({page})=>{

//     await page.goto('https://uat.ezyhired.com/');
//     const emailField = page.getByPlaceholder('jane@company.com');
//     await page.getByRole('button',{name:'Sign In to Dashboard '}).click();
//     const message = await emailField.evaluate(el=> el.validationMessage)
//     console.log(message);

//  })

//  test('Login with valid credentials',async({page})=>{

//     await page.goto('https://uat.ezyhired.com/');
//     await expect( page.getByPlaceholder('jane@company.com')).toBeVisible();
//     await page.getByPlaceholder('jane@company.com').fill('nk0506047@gmail.com');
//     await expect( page.getByPlaceholder('••••••••')).toBeVisible();
//     await page.getByPlaceholder('••••••••').fill('Naresh9959@');
//     await page.getByRole('button',{name:'Sign In to Dashboard '}).isVisible();
//     await page.getByRole('button',{name:'Sign In to Dashboard '}).click();
//     await expect(page).toHaveURL(/uat.ezyhired.com/i);
//     await expect(page.getByRole('img', { name: 'ezyhired' }).first()).toBeVisible();

//  })

test('dropdown',async({page})=>
{

     await page.goto('https://uat.ezyhired.com/');
     await expect( page.getByPlaceholder('jane@company.com')).toBeVisible();
     await page.getByPlaceholder('jane@company.com').fill('nk0506047@gmail.com');
    await expect( page.getByPlaceholder('••••••••')).toBeVisible();
    await page.getByPlaceholder('••••••••').fill('Naresh9959@');
     await page.getByRole('button',{name:'Sign In to Dashboard '}).isVisible();
     await page.getByRole('button',{name:'Sign In to Dashboard '}).click();
     await expect(page).toHaveURL(/uat.ezyhired.com/i);
     await expect(page.getByRole('img', { name: 'ezyhired' }).first()).toBeVisible();
     await expect(page.getByRole('button',{name:'Tasks'})).toBeVisible();
     await page.getByRole('button',{name:'Tasks'}).click();

     const select=page.locator('select').first();
    await select.selectOption('Medium');
    await page.waitForTimeout(100);

})





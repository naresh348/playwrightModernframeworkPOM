import { test, expect } from "../fixtures/baseTest"
import testdata from "../Utils/testdata";

test.beforeEach(async({admin,loggedInPage})=>
{
    await admin.clickOnAdminBtn();

})

test("verify the admin button functionality",async({admin,loggedInPage})=>
{
    await expect(admin.page).toHaveURL("https://x-med.in/admindashboard/userRole");

})
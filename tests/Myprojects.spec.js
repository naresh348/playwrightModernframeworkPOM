const { test, expect } = require("../fixtures/baseTest");


test("Verify the click functionality on myproject btn",
async ({ myProjectsPage , loggedInPage }) => {

    await myProjectsPage.navigateToMyprojectsPage();

});


test.only("Verify the Newbutton functionality",async ({myProjectsPage , loggedInPage})=>
{
    await myProjectsPage.navigateToMyprojectsPage();
    await myProjectsPage.clickOnNewProjectBtn();

});
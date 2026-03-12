import { test, expect } from '../fixtures/baseTest';
import testdata from "../Utils/testdata";


test.beforeEach(async ({ myProjectsPage,loggedInPage }) => {

    await myProjectsPage.navigateToMyprojectsPage();

});

test("Verify the click functionality on myproject btn",
async ({ myProjectsPage  }) => {

    await expect(myProjectsPage.projectslist.first()).toBeVisible();
    await expect(myProjectsPage.page).toHaveURL(/project/i);

});


test("Verify the Newbutton functionality",async ({ myProjectsPage })=>
{
    await myProjectsPage.clickOnNewProjectBtn();
    await expect(myProjectsPage.page).toHaveURL(/project/i);
});


test("List of projects",async ({myProjectsPage})=>
{
    const projectist=await myProjectsPage.listOfProjects();
    console.log(projectist);
    await expect(myProjectsPage.projectslist).not.toHaveCount(0);
    await myProjectsPage.clickOnSpecificProjectDetailPage(testdata.projectname);
})

test("verify Specific Project to be selected",async ({myProjectsPage})=>
{

    await myProjectsPage.clickOnSpecificProjectDetailPage(testdata.projectname);
    expect(myProjectsPage.page).toHaveURL(/Projects/i);
    

})

test("verify view button functionality on specific project",async ({myProjectsPage})=>
{
    
    await myProjectsPage.clickOnSpecificProjectDetailPage(testdata.projectname);
    await myProjectsPage.viewBtn();
    await expect(myProjectsPage.filterInProjectDetails).toBeVisible();

})

test("Verify filter DropDown In ProjectDetails",async ({myProjectsPage})=>
{
    await myProjectsPage.clickOnSpecificProjectDetailPage(testdata.projectname);
    await myProjectsPage.viewBtn()
    await myProjectsPage.clickfilterDropDownInProjectDetails();
    expect(myProjectsPage.filterInProjectDetails).toBeVisible();
    
})

test("Verify options under phase filter sections",async ({myProjectsPage})=>
{
    await myProjectsPage.clickOnSpecificProjectDetailPage(testdata.projectname);
    await myProjectsPage.viewBtn();
    await myProjectsPage.clickfilterDropDownInProjectDetails();
    expect(myProjectsPage.filterInProjectDetails).toHaveCount(1);
    
})

test("Verify phase filter option selection",async ({myProjectsPage})=>
{
    await myProjectsPage.clickOnSpecificProjectDetailPage(testdata.projectname);
    await myProjectsPage.viewBtn();
    await myProjectsPage.clickfilterDropDownInProjectDetails();
    await myProjectsPage.selectPhaseFilterOption(testdata.options);
    expect(myProjectsPage.filterInProjectDetails).toHaveValue(/not Yet Started/i)
    
})









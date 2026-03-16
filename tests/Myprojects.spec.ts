import { test, expect } from '../fixtures/baseTest';
import MyProjectsPage from '../Pages/Myprojectpage';
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

test("Verify the project creation with valid credentials",async ({myProjectsPage})=>
{

    await myProjectsPage.clickOnNewProjectBtn();
    await expect(myProjectsPage.page).toHaveURL(/project/i);
    await myProjectsPage.enterProjectTitle(testdata.Projecttitle);
    await myProjectsPage.enterProjectDescription(testdata.projectDescription);
    await myProjectsPage.enterStartDate("18/12/2026");
    await myProjectsPage.clickOnTestAssetTypes();
    await myProjectsPage.selectEquipment("HVAC");
    await expect(myProjectsPage.riskAssementsection).toBeEnabled();
    await myProjectsPage.clickOnRadioBtns();
    await myProjectsPage.selectRenewalYear();
    await myProjectsPage.clickOnNextBtnUnderProjectCreations();
    await myProjectsPage.enterTextFieldInAddTeamMembers("sridhar","venkat","Naveen","Vinay");
    await myProjectsPage.uploadFiles();
    await expect(myProjectsPage.verifyuploadedFile("cccc.txt")).toBeTruthy();
    await myProjectsPage.uploadCrForm();
    await expect(await myProjectsPage.verifyUploadCrForm()).toContain("n.pdf");
    await myProjectsPage.enterChangeRequestNumber("33333");
    await myProjectsPage.clickOnSubmitBtn();
    await expect(await myProjectsPage.getToastMessage()).toContain("Successfull");
   
    
})


test("Verify the project creation with Already exits project",async ({myProjectsPage})=>
{

    await myProjectsPage.clickOnNewProjectBtn();
    await expect(myProjectsPage.page).toHaveURL(/project/i);
    await myProjectsPage.enterProjectTitle(testdata.Projecttitle);
    await myProjectsPage.enterProjectDescription(testdata.projectDescription);
    await myProjectsPage.enterStartDate("18/12/2026");
    await myProjectsPage.clickOnTestAssetTypes();
    await myProjectsPage.selectEquipment("HVAC");
    await expect(myProjectsPage.riskAssementsection).toBeEnabled();
    await myProjectsPage.clickOnRadioBtns();
    await myProjectsPage.selectRenewalYear();
    await myProjectsPage.clickOnNextBtnUnderProjectCreations();
    await myProjectsPage.enterTextFieldInAddTeamMembers("sridhar","venkat","Naveen","Vinay");
    await myProjectsPage.uploadFiles();
    await expect(myProjectsPage.verifyuploadedFile("cccc.txt")).toBeTruthy();
    await myProjectsPage.uploadCrForm();
    await expect(await myProjectsPage.verifyUploadCrForm()).toContain("n.pdf");
    await myProjectsPage.enterChangeRequestNumber("33333");
    await myProjectsPage.clickOnSubmitBtn();
    await expect(await myProjectsPage.getToastMessage()).toContain("already");
   
    
})


test.only("verify the project creation without entering valid fields",async ({myProjectsPage})=>
{
    await myProjectsPage.clickOnNewProjectBtn();
    await myProjectsPage.clickOnNextBtnUnderProjectCreations();
    await expect(await myProjectsPage.getToastMessage()).toContain("title");


})















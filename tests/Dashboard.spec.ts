import { expect, test } from '../fixtures/baseTest';
import Loginpage from '../Pages/Loginpage';
import testdata from '../Utils/testdata';

test.beforeEach(async ({ dashboard, loggedInPage }) => {
    await dashboard.clickOnDashBoardBtn();
})

test('Navigated to Dashboard page', async ({ dashboard }) => {
    await expect(dashboard.page).toHaveURL(/dashboard/i);
    const options = await dashboard.getDropDownOptions();
    expect(options.length).toBeGreaterThan(0);
    expect(options).toEqual([
        'All Status',
        'Completed',
        'In Progress',
        'Active',
        'Starting'    // ✔ reusable assertion utilities
    ]);

})

test('should select "Completed" status and update results', async ({ dashboard }) => {
    await dashboard.selectStatus("Completed");
    const status = await dashboard.getSelectedStatus();
    expect(status).toBe('completed');
})

test("should click on all project dropdown button", async ({ dashboard }) => {
    await dashboard.clickOnAllProjectDropdown()
    await expect(dashboard.allprojectdropdown).toBeVisible();

})

test.only("should get all project names", async ({ dashboard }) => {
    await dashboard.clickOnAllProjectDropdown()
    const projects = await dashboard.getAllProjectName();    
    console.log(projects);
    const project = await dashboard.clickOnselectedProjectName("P3");
    expect(project).toContain("P3");

})




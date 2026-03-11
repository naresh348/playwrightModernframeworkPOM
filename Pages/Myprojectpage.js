class MyProjectsPage {
    constructor(page) {
        this.page = page;
        this.projecticonbtn = page.locator("//*[@aria-label='My Projects']");
        this.newprojectbtn = page.getByRole('button', { name: 'New Project' });
        this.projectslist = page.locator(".font-semibold.text-gray-900");
        this.viewbtn = page.getByRole('button', { name: 'View' });
        this.filterInProjectDetails = page.locator("#phase-filter");


    }

    async navigateToMyprojectsPage() {
        await this.projecticonbtn.click();
    }
    async clickOnNewProjectBtn() {
        await this.newprojectbtn.click();
    }
    async listOfProjects() {
        await this.projectslist.first().waitFor({ state: "visible" });
        const projectlist = await this.projectslist.allTextContents();
        return projectlist;
    }

    async clickOnSpecificProjectDetailPage(projectname) {

        const projectCard = this.page.locator(".group", { hasText: projectname });
        await projectCard.waitFor({ state: "visible" });
        await projectCard.locator("[aria-haspopup='true']").first().click();

    }

    async viewBtn() {
        await this.viewbtn.waitFor({ state: "visible" });
        await this.viewbtn.click();
    }

    async clickfilterDropDownInProjectDetails()
    {
        await this.filterInProjectDetails.waitFor({state:"visible"})
        await this.filterInProjectDetails.click();
    }

    async selectPhaseFilterOption(option)
    {
         await this.page.selectOption("#phase-filter", { label: option });
    }

    async getPhaseFilterOptions()
    {
        return await this.page.locator("#phase-filter option").allTextContents();
    }




}


module.exports = MyProjectsPage; //  direct export
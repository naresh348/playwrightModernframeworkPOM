import { Page, Locator } from '@playwright/test';

export default class MyProjectsPage {

    page: Page;
    projecticonbtn: Locator;
    newprojectbtn: Locator;
    projectslist: Locator;
    viewbtn: Locator;
    filterInProjectDetails: Locator;

    constructor(page: Page) {
        this.page = page;

        this.projecticonbtn = page.getByRole('link', { name: "My Projects" });
        this.newprojectbtn = page.getByRole('button', { name: 'New Project' });
        this.projectslist = page.locator(".font-semibold.text-gray-900");
        this.viewbtn = page.getByRole('button', { name: 'View' });
        this.filterInProjectDetails = page.locator("#phase-filter");
    }

    async navigateToMyprojectsPage(): Promise<void> {
        await this.projecticonbtn.click();
    }

    async clickOnNewProjectBtn(): Promise<void> {
        await this.newprojectbtn.click();
    }

    async listOfProjects(): Promise<string[]> {
        await this.projectslist.first().waitFor({ state: "visible" });
        const projectlist = await this.projectslist.allTextContents();
        return projectlist;
    }

    async clickOnSpecificProjectDetailPage(projectname: string): Promise<void> {

        const projectCard = this.page.locator(".group", { hasText: projectname });

        await projectCard.waitFor({ state: "visible" });

        await projectCard.locator("[aria-haspopup='true']").first().click();
    }

    async viewBtn(): Promise<void> {
        await this.viewbtn.waitFor({ state: "visible" });
        await this.viewbtn.click();
    }

    async clickfilterDropDownInProjectDetails(): Promise<void> {
        await this.filterInProjectDetails.waitFor({ state: "visible" });
        await this.filterInProjectDetails.click();
    }

    async selectPhaseFilterOption(option: string): Promise<void> {
        await this.page.selectOption("#phase-filter", { label: option });
    }

    async getPhaseFilterOptions(): Promise<string[]> {
        return await this.page.locator("#phase-filter option").allTextContents();
    }
}
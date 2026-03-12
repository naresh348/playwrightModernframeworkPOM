import { Page, Locator } from '@playwright/test';

export default class Myworkspage {

    page: Page;
    commentbtn: Locator;
    allprojectdropdown: Locator;
    listofproject: Locator;

    constructor(page: Page) {
        this.page = page;

        this.commentbtn = page.getByRole('tab', { name: 'Comments' });
        this.allprojectdropdown = page.locator("span:has-text('All Projects')");
        this.listofproject = page.locator(".h-80 li");
    }

    async commentBtn(): Promise<void> {
        await this.commentbtn.click();
    }

    async allProjectDropdown(): Promise<string[]> {
        await this.allprojectdropdown.click();
        const projects = await this.listofproject.allTextContents();
        return projects;
    }

    async selectSpecificProject(projectName: string): Promise<void> {
        await this.page
            .locator(".h-80.overflow-y-auto li button")
            .filter({ hasText: projectName })
            .first()
            .click();
    }
}
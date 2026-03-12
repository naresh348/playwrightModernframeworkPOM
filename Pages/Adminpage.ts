import { Page, Locator } from '@playwright/test';

export default class Adminpage {

    page: Page;
    adminpagebtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminpagebtn = page.getByRole('link', { name: "Admin" });
    }

    async clickOnAdminBtn() {
        await this.adminpagebtn.click();
    }
}
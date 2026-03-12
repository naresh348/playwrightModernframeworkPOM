import { Page, Locator } from '@playwright/test';

export default class Settingpage {

    page: Page;
    settingbtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.settingbtn = page.locator("//*[@aria-label='Settings']");
    }

    async settingBtn(): Promise<void> {
        await this.settingbtn.click();
    }
}
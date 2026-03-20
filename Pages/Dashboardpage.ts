import {Locator,Page} from "@playwright/test";

export default class Dashboardpage
{
    page:Page;
    dashboardBtn:Locator;
    dropdownoptions:Locator;
    allprojectdropdown:Locator;
    searchfield:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.dashboardBtn=page.getByRole('link',{name:'Dashboard'});
        this.dropdownoptions=page.locator('select');
        this.allprojectdropdown=page.getByRole("button",{name:'All Projects'});
        this.searchfield=page.getByPlaceholder("Search projects...");
        
    }

    async clickOnDashBoardBtn():Promise<void>
    {
        await this.dashboardBtn.waitFor({state:"visible"});
        await this.dashboardBtn.click();
    }

    async getDropDownOptions():Promise<string[]>
    {
        await this.dropdownoptions.waitFor({state:'visible'});
        const options = await this.dropdownoptions.locator('option').allTextContents();
        return options;
        
    }

    async selectStatus(status: string) {

        await this.dropdownoptions.waitFor({state:'visible'});
        await this.dropdownoptions.selectOption({ label: status });
    }

    async getSelectedStatus():Promise<string>
    {
        return await this.dropdownoptions.inputValue();
        
    }

    async clickOnAllProjectDropdown()
    {
        this.allprojectdropdown.waitFor({state:'visible'})
        await this.allprojectdropdown.click();
    }

    async getAllProjectName():Promise<String[]>
    {
        const names=this.page.locator(".font-medium.text-slate-900");
        await names.first().isVisible();
        return await names.allInnerTexts();
    }

    async clickOnselectedProjectName(pn:string)
    {
        await this.searchfield.fill(pn);
        const names = this.page.getByText(pn, { exact: true }).first();
        await names.waitFor({state:'visible'});
        await names.click();
        return await names.textContent();
    }
    


}
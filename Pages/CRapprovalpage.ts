import { Locator, Page } from "@playwright/test";    
export default class CRapprovalpage
{
    page:Page;
    crapprovalbtn:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.crapprovalbtn=page.getByRole('link',{name:'CR Approval'});
    }

    async ClickOnCrApproval(): Promise<void>
    {
        await this.crapprovalbtn.waitFor({state:"visible"});
        await this.crapprovalbtn.click();
    }


}
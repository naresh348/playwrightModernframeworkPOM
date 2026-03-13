import { Page, Locator } from '@playwright/test';

export default class MyProjectsPage {

    page: Page;
    projecticonbtn: Locator;
    newprojectbtn: Locator;
    projectslist: Locator;
    viewbtn: Locator;
    filterInProjectDetails: Locator;
    projectTitle: Locator;
    projectDescription: Locator;
    startDate: Locator;
    testAssetTypes: Locator;
    aiVerifiedEquipmentbtn: Locator;
    nextBtn: Locator;
    riskAssementsection: Locator;
    addmembertxtfield:Locator;
    sridharname:Locator;


    constructor(page: Page) {
        this.page = page;

        this.projecticonbtn = page.getByRole('link', { name: "My Projects" });
        this.newprojectbtn = page.getByRole('button', { name: 'New Project' });
        this.projectslist = page.locator(".font-semibold.text-gray-900");
        this.viewbtn = page.getByRole('button', { name: 'View' });
        this.filterInProjectDetails = page.locator("#phase-filter");
        this.projectTitle = page.getByLabel("Project Title ");
        this.projectDescription = page.getByPlaceholder("Project description");
        this.startDate = page.locator("[type='date']").first();
        this.testAssetTypes = page.getByRole('radio', { name: "Equipment" });
        this.aiVerifiedEquipmentbtn = page.getByRole('button', { name: 'AI Verified Equipment' });
        this.nextBtn = page.getByRole('button', { name: 'Next' });
        this.riskAssementsection = page.getByText("Risk Assessment",{exact:true});
        this.addmembertxtfield = page.getByPlaceholder("Add team members...");
        this.sridharname = page.getByRole('listbox');

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

    async enterProjectTitle(projecttitle: string): Promise<void> {
        this.projectTitle.waitFor({ state: "visible" });
        await this.projectTitle.fill(projecttitle);
    }

    async enterProjectDescription(projectdescription: any): Promise<void> {
        await this.projectDescription.fill(projectdescription);
    }

    async enterStartDate(startdate: any): Promise<void> {
        await this.startDate.waitFor({ state: "visible" });
        await this.startDate.click();
        await this.startDate.type(startdate)
    }

    async clickOnTestAssetTypes() {
        await this.testAssetTypes.waitFor({ state: "visible" });
        await this.testAssetTypes.click();

    }

    async selectEquipment(equipmentName: string) {
        const equipment = this.page.getByRole('checkbox', { name: equipmentName, exact: true });
        await equipment.click();
        await this.nextBtn.click();
    }

    async clickOnNextBtnUnderProjectCreations() {

        await this.nextBtn.waitFor({ state: "visible" });
        await this.nextBtn.click();

    }

    async clickOnRadioBtns():Promise<void>
    {
        const radiobtn:Locator=this.page.locator(".space-y-2 [type='radio']");
        await radiobtn.first().waitFor();   

        console.log(await radiobtn.count());
         const count = await radiobtn.count();
        for(let i=0;i<count;i+=2)
        {
           await  radiobtn.nth(i).click();
        }
    }

    async selectRenewalYear():Promise<void>
    {
         
        await this.page.locator(".mt-1.w-full").first().selectOption({index:1});
    }

    async enterTextFieldInAddTeamMembers(addmember:any):Promise<void>
    {
        await this.addmembertxtfield.waitFor({state:"visible"});
        await this.addmembertxtfield.fill(addmember);
        await this.sridharname.locator('div:has-text("Sridhar")').filter({hasText: 'Business Owner'}).first().click();
    }




}
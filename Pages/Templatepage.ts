import { Page, Locator } from '@playwright/test';

export default class Templatepage {
    page: Page;
    TemplateBtn: Locator;
    TemplateTxt: Locator;
    TestingBtn: Locator;
    TestingFormTxt: Locator;
    AddnewversionBtn: Locator;
    BackToVersionBtn: Locator;
    AddQuestionIcon: Locator;
    PreviewTxt: Locator;
    questionTypeDropdown: Locator;
    editBtn:Locator;
    questionText:Locator;
    updateQuestionBtn:Locator;

    constructor(page: Page) {
        this.page = page;
        this.TemplateBtn = page.getByRole('link', { name: 'Templates' });
        this.TemplateTxt = page.getByRole('heading', { name: 'Templates' });
        this.TestingBtn = page.getByRole('heading', { name: 'Testing Form' });
        this.TestingFormTxt = page.getByRole('heading', { name: 'Testing Form' })
        this.AddnewversionBtn = page.getByRole('button', { name: ' Add New Version' });
        this.BackToVersionBtn = page.getByRole('button', { name: ' Back to Versions' });
        this.AddQuestionIcon = page.getByTitle("Add Questions").nth(1);
        this.PreviewTxt = page.getByText("Preview", { exact: true });
        this.questionTypeDropdown = page.locator('.w-full.border.border-gray-300').first();
        this.editBtn = this.page.locator('div:has-text("Please read the above questions")').locator('button[title="Edit"]').nth(0);
        this.questionText=this.page.getByPlaceholder("Enter question (optional for table)");
        this.updateQuestionBtn=this.page.getByRole('button',({name:'Update Question'}));



    }

    async clickOnTemplateBtn(): Promise<void> {
        await this.TemplateBtn.waitFor({ state: 'visible' });
        await this.TemplateBtn.click();
    }

    async getTemplatetxt(): Promise<string | null> {
        return this.TemplateTxt.textContent();
    }

    async clickonTestingBtn() {
        await this.TestingBtn.waitFor({ state: 'visible' });
        await this.TestingBtn.click();
    }

    async getTestingFormTxt(): Promise<string | null> {
        return this.TestingFormTxt.textContent();
    }

    async clickOnAddNewVersionBtn(): Promise<void> {
        await this.AddnewversionBtn.waitFor({ state: 'visible' });
        await this.AddnewversionBtn.click();
    }

    async ClickOnAddQuestionBtn(): Promise<void> {
        await this.AddQuestionIcon.waitFor({ state: 'visible' });
        await this.AddQuestionIcon.click();
    }

    async getPreviewTxt(): Promise<string | null> {
        return this.PreviewTxt.textContent();
    }

    async selectQuestionTypeByIndex(index:number):Promise<void>
     {
        await this.questionTypeDropdown.waitFor({ state: 'visible' });                       
        await this.questionTypeDropdown.selectOption({index});
    }

    async clickEditbutton():Promise<void>
    {
        await this.editBtn.waitFor({state:'visible'});
        await this.editBtn.click();
        await this.questionText.clear();
        await this.questionText.fill("Naresh");

    }


}
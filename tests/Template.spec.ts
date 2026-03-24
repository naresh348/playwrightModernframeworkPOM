import { test, expect } from '../fixtures/baseTest';
import Templatepage from '../Pages/Templatepage';
import testdata from '../Utils/testdata';

test.beforeEach('Verify the template button fuctonality', async ({ template, loggedInPage }) => {
    await expect(template.TemplateBtn).toBeVisible();
    await template.clickOnTemplateBtn();
    const txt = await template.getTemplatetxt();
    expect(txt).toContain('Templates');
})

test('should navigate to Testing section after clicking Testing button on Templates page', async ({ template }) => {
    await expect(template.TestingBtn).toBeVisible();
    await template.clickonTestingBtn();
    const txt = await template.getTestingFormTxt();
    expect(txt).toMatch(/Testing form/i);
})

test('After navigate to Testing form user should click on Add new version button', async ({ template }) => {
    await expect(template.TestingBtn).toBeVisible();
    await template.clickonTestingBtn();
    const txt = await template.getTestingFormTxt();
    expect(txt).toMatch(/Testing form/i);
    await expect(template.AddnewversionBtn).toBeVisible();
    await template.clickOnAddNewVersionBtn();
    await expect(template.BackToVersionBtn).toBeVisible();
})

test('should click on Add question button', async ({ template }) => {
    await expect(template.TestingBtn).toBeVisible();
    await template.clickonTestingBtn();
    const txt = await template.getTestingFormTxt();
    expect(txt).toMatch(/Testing form/i);
    await expect(template.AddnewversionBtn).toBeVisible();
    await template.clickOnAddNewVersionBtn();
    await expect(template.BackToVersionBtn).toBeVisible();
    await template.ClickOnAddQuestionBtn();
    const previewtxt=await template.getPreviewTxt();
    await expect(previewtxt ).toMatch(/Preview/i);

})


test('verify selecting dropdown option in Testing Form', async ({ template }) => {
    await expect(template.TestingBtn).toBeVisible();
    await template.clickonTestingBtn();
    const txt = await template.getTestingFormTxt();
    expect(txt).toMatch(/Testing form/i);
    await expect(template.AddnewversionBtn).toBeVisible();
    await template.clickOnAddNewVersionBtn();
    await expect(template.BackToVersionBtn).toBeVisible();
    await template.ClickOnAddQuestionBtn();
    const previewtxt=await template.getPreviewTxt();
    await expect(previewtxt ).toMatch(/Preview/i);
    await template.selectQuestionTypeByIndex(3);

})

test('should verify Edit button functionality in Testing Form', async ({ template }) => {
    await expect(template.TestingBtn).toBeVisible();
    await template.clickonTestingBtn();
    const txt = await template.getTestingFormTxt();
    expect(txt).toMatch(/Testing form/i);
    await expect(template.AddnewversionBtn).toBeVisible();
    await template.clickOnAddNewVersionBtn();
    await expect(template.BackToVersionBtn).toBeVisible();
    await template.ClickOnAddQuestionBtn();
    const previewtxt=await template.getPreviewTxt();
    await expect(previewtxt ).toMatch(/Preview/i);
    await expect(template.editBtn).toBeVisible();
    await template.clickEditbutton();
    await expect(template.updateQuestionBtn).toBeVisible();


})










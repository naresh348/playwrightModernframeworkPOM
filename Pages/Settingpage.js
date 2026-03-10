class Settingpage
{
    constructor(page)
    {
        this.page=page;
        this.settingbtn=page.locator("//*[@aria-label='Settings']");
    }

    async settingBtn()
    {
       await this.settingbtn.click();
    }
}
module.exports= Settingpage;
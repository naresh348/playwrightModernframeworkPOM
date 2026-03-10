class MyProjectsPage {
    constructor(page) {
        this.page = page;
        this.projecticonbtn = page.locator("//*[@aria-label='My Projects']");
        this.newprojectbtn = page.getByRole('button',{name:'New Project'});

    }

    async navigateToMyprojectsPage() {
        await this.projecticonbtn.click();
    }
    async clickOnNewProjectBtn()
    {   
        await this.newprojectbtn.click();
    }
}


module.exports = MyProjectsPage; //  direct export
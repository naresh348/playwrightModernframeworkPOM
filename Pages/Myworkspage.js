const { expect, test } = require("@playwright/test")

class Myworkspage {
    constructor(page) {
        this.page = page;
        this.commentbtn = page.getByRole('tab', { name: 'Comments' })
        this.allprojectdropdown = page.locator("span:has-text('All Projects')");
        this.listofproject = page.locator(".h-80 li");
        
    }

    async commentBtn() {
        await this.commentbtn.click();
    }

    async allProjectDropdown() {
        await this.allprojectdropdown.click();
         const projects = await this.listofproject.allTextContents();
         return projects;
        // const count = await this.listofproject.count();
        // const projects=[]
        // console.log(count);
        // for(let i=0;i<count;i++)
        // {
        //     const project = await this.listofproject.nth(i).textContent();
        //     console.log(project);
        //     projects.push(project.trim());

        // }

        // return projects;
    }

    async selectSpecificProject(projectName)
    {
       await this.page
        .locator(".h-80.overflow-y-auto li button")
        .filter({ hasText: projectName })
        .first()
        .click();
    }



}
module.exports = Myworkspage;
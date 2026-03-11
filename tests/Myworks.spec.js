const testdata = require("../Utils/testdata");
const { Mywork, test } = require("../fixtures/baseTest")
const { expect } = require("@playwright/test")


test("verify the Comment Button functionality @sanity", async ({ Mywork, loggedInPage }) => {
      
       await Mywork.commentBtn();

})

test.only("verify the dropdown button fucntionaity on all projects", async ({ Mywork,loggedInPage }) => {
      
       const projects = await Mywork.allProjectDropdown();
       console.log(projects);
       await Mywork.selectSpecificProject(testdata.product);
       expect(projects.length).toBeGreaterThan(0);       
       
})


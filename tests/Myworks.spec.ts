import { test, expect } from '../fixtures/baseTest';
import testdata from "../Utils/testdata";


test("verify the Comment Button functionality @sanity", async ({ Mywork, loggedInPage }) => {
      
       await Mywork.commentBtn();

})

test("verify the dropdown button fucntionaity on all projects", async ({ Mywork,loggedInPage }) => {
      
       const projects = await Mywork.allProjectDropdown();
       console.log(projects);
       await Mywork.selectSpecificProject(testdata.product);
       expect(projects.length).toBeGreaterThan(0);       
       
})


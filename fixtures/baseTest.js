const base = require("@playwright/test");
const LoginPage = require("../Pages/Loginpage");
const MyProjectsPage = require("../Pages/Myprojectpage");
const Settingpage=require("../Pages/Settingpage") 
const Myworkspage = require("../Pages/Myworkspage");
const testdata = require("../Utils/testdata");

exports.test = base.test.extend({

  // only open login page
  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    console.log("Test Started");

    await loginPage.goto('/');

    await use(loginPage);
    console.log("Test completed");

  },

  // logged in fixture
  loggedInPage: async ({ loginPage }, use) => {

    console.log("Test Started");

    await loginPage.validlogin(
      testdata.validUser.username,
      testdata.validUser.password
    );

    await loginPage.Signinbtn();

    await use(loginPage);
    console.log("Test completed");
  },



 myProjectsPage: async ({ page }, use) => {const myProjectsPage = new MyProjectsPage(page);
    await use(myProjectsPage);
},

Settingpg:async ({page}, use)=>{
  const Settingpg = new Settingpage(page);
  await use(Settingpg);
},

Mywork:async({page},use)=>
{
        
        const Mywork = new Myworkspage(page);
        await  use(Mywork)
}


});

exports.expect = base.expect;
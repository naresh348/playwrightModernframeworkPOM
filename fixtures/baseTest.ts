import { test as base, expect } from '@playwright/test';

import LoginPage from '../Pages/Loginpage';
import MyProjectsPage from '../Pages/Myprojectpage';
import Settingpage from '../Pages/Settingpage';
import Myworkspage from '../Pages/Myworkspage';
import Adminpage from '../Pages/Adminpage';
import testdata from '../Utils/testdata';
import CRapprovalpage from '../Pages/CRapprovalpage';
import Dashboardpage from '../Pages/Dashboardpage';
import Templatepage from '../Pages/Templatepage';


type MyFixtures = {
  loginPage: LoginPage;
  loggedInPage: LoginPage;
  myProjectsPage: MyProjectsPage;
  Settingpg: Settingpage;
  Mywork: Myworkspage;
  admin: Adminpage;
  crapproval: CRapprovalpage;
  dashboard: Dashboardpage;
  template: Templatepage;

};

export const test = base.extend<MyFixtures>({

  // Open login page
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto('/');

    await use(loginPage);
  },

  // Logged-in fixture
  loggedInPage: async ({ loginPage }, use) => {

    console.log("Test Started");

    await loginPage.validLogin(
      testdata.validUser.username,
      testdata.validUser.password
    );

    await loginPage.Signinbtn();

    await use(loginPage);

    console.log("Test completed");
  },

  myProjectsPage: async ({ page }, use) => {
    const myProjectsPage = new MyProjectsPage(page);
    await use(myProjectsPage);
  },

  Settingpg: async ({ page }, use) => {
    const settingpg = new Settingpage(page);
    await use(settingpg);
  },

  Mywork: async ({ page }, use) => {
    const mywork = new Myworkspage(page);
    await use(mywork);
  },

  admin: async ({ page }, use) => {
    const admin = new Adminpage(page);
    await use(admin);
  },

  crapproval: async ({ page }, use) => {
    const crapproval = new CRapprovalpage(page);
    await use(crapproval);
  },


  dashboard: async ({ page }, use) => {
    const dashboard = new Dashboardpage(page);
    await use(dashboard);
  },

  template: async ({ page }, use) => {

    const template = new Templatepage(page);
    await use(template)
  }
});

export { expect };
import { chromium } from '@playwright/test';
import LoginPage from './Pages/Loginpage';
import testdata from './Utils/testdata';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  await page.goto('/'); // baseURL will be used

  await loginPage.validLogin(
    testdata.validUser.username,
    testdata.validUser.password
  );

  await loginPage.Signinbtn();

  // ✅ Save login session
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
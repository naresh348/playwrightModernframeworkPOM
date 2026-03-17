import { test, expect } from '../fixtures/baseTest';
import testdata from "../Utils/testdata";

test("@sanity login with valid credentials", async ({ loggedInPage }) => {
    const text = await loggedInPage.getToastMessage();
    console.log("Toast message:", text);
    expect(text).toMatch(/Login successful/i);
});

test("verify login with invalid credentials", async ({ loginPage }) => {
    await loginPage.invalidLogin(
        testdata.invalidUser.username,
        testdata.invalidUser.password
    );

    await loginPage.Signinbtn();

    const text = await loginPage.getToastMessage();
    expect(text).toContain("Please enter valid Email Address.");
});

test("verify login data with empty fields", async ({ loginPage }) => {
    await loginPage.Signinbtn();

    const text = await loginPage.getToastMessage();
    expect(text).toContain("Email is required");
});

test("verify the forgot button functionality", async ({ loginPage }) => {
    await loginPage.clickForgotPassword();
    await expect(loginPage.forgotbtn).toBeVisible();
});

test("verify check box is clickable under login page", async ({ loginPage }) => {
    await loginPage.rememberCheckBox();
    await expect(loginPage.clickonremembercheckbox).toBeEnabled();
});

test("Verify the profile camera icon functionality", async ({ loggedInPage }) => {


    await loggedInPage.clickOnProfileBtn();
    await loggedInPage.openProfileMenu();

    await expect(loggedInPage.page).toHaveURL("https://x-med.in/project/all");
    await expect(loggedInPage.editProfileModalTitle).toBeVisible();
});
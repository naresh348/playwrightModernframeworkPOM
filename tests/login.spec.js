// tests/login.spec.js
const { test, expect } = require('../fixtures/baseTest');
const testdata = require("../Utils/testdata");



test("@sanity login with valid credentials ", async ({ loggedInPage }) => {
    const text = await loggedInPage.getToastMessage();
    console.log("Toast message:", text)
    expect(text).toMatch(/Login successful/i);
});

test("verify login with invalid credentials", async ({ loginPage }) => {
    await loginPage.invalidLogin(testdata.invalidUser.username, testdata.invalidUser.password);
    await loginPage.Signinbtn();
    const text = await loginPage.getToastMessage();
    console.log("Toast message:", text)
    expect(text).toContain("Please enter valid Email Address.");    
});

test("verify login data with empty fields", async ({ loginPage }) => {
    await loginPage.Signinbtn();
    const text = await loginPage.getToastMessage();
    console.log("Toast message:", text)
    expect(text).toContain("Email is required");
});

test("verify the forgot button functionality", async ({ loginPage }) => {
    await loginPage.clickForgotPassword();
    expect(loginPage.page).toHaveURL("https://x-med.in/forgot-pwd");
});
// tests/login.spec.js
const { test, expect } = require('../fixtures/baseTest');
const testdata = require("../Utils/testdata");



test("login with valid credentials @sanity", async ({ loginPage }) => {
    const text = await this.toastermsg.textContent()
    console.log("Toast message:", text)
    expect(text).toContain(message);
    await loginPage.Toastermsg("Login successful");
});

test("verify login with invalid credentials", async ({ loginPage }) => {
    await loginPage.invalidLogin(testdata.invalidUser.username, testdata.invalidUser.password);
    await loginPage.Signinbtn();
    const text = await loginPage.getToastMessage();
    console.log("Toast message:", text)
    expect(text).toContain("Please enter valid Email Address.");    
});

test.only("verify login data with empty fields", async ({ loginPage }) => {
    await loginPage.Signinbtn();
    const text = await loginPage.getToastMessage();
    console.log("Toast message:", text)
    expect(text).toContain("Email is required");
});

test("verify the forgot button functionality", async ({ loginPage }) => {
    await loginPage.Forgotbtn();
});
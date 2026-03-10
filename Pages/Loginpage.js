const { expect } = require("@playwright/test")

class Loginpage {
    constructor(page) {
        this.page = page;

        this.username = page.locator("//*[@placeholder='Email address']")
        this.password = page.locator("//*[@placeholder='Password']")
        this.loginBtn = page.locator("//*[@type='submit']")
        this.toastermsg = page.locator(".Toastify__toast")
        this.forgotbtn = page.getByRole('button', { name: 'Forgot Password' })

    }

    async goto(url) {
        await this.page.goto(url)
    }

    async validLogin(user, pass) {
        await this.username.fill(user)
        await this.password.fill(pass)
        
    }

    async getToastMessage() {
        await this.toastermsg.waitFor({ state: "visible" });
        return await this.toastermsg.textContent();
    }

    async invalidLogin(user, pass) {
        await this.username.fill(user)
        await this.password.fill(pass)


    }

    async Signinbtn()
    {
        await this.loginBtn.click()
    }

    async clickForgotPassword()
    {
        await this.forgotbtn.waitFor({state:'visible'})
        await this.forgotbtn.click();
    }

     










}
module.exports =  Loginpage ;

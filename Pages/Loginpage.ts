import { Page, Locator } from '@playwright/test';

export default class Loginpage {

    page: Page;
    username: Locator;
    password: Locator;
    loginBtn: Locator;
    toastermsg: Locator;
    forgotbtn: Locator;
    clickonremembercheckbox: Locator;
    clickonbackbtn: Locator;
    profilemenubtn: Locator;
    profilecameraicon: Locator;
    editProfileModalTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.getByPlaceholder('Email address');
        this.password = page.getByPlaceholder("Password");
        this.loginBtn = page.getByRole("button", { name: "Sign in", exact: true });
        this.toastermsg = page.locator(".Toastify__toast");
        this.forgotbtn = page.getByRole('button', { name: 'Forgot Password' });
        this.clickonremembercheckbox = page.getByLabel("Remember me");
        this.clickonbackbtn = page.getByText("Back to Login");
        this.profilemenubtn = page.locator('button.bg-\\[\\#122783a1\\]');
        this.profilecameraicon = page.locator(".lucide.lucide-camera.h-5.w-5.text-white");
        this.editProfileModalTitle = page.getByText("Edit Profile Picture");
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async validLogin(user: string, pass: string): Promise<void> {
        await this.username.fill(user);
        await this.password.fill(pass);
    }

    async invalidLogin(user: string, pass: string): Promise<void> {
        await this.username.fill(user);
        await this.password.fill(pass);
    }

    async Signinbtn(): Promise<void> {
        await this.loginBtn.click();
    }

    async getToastMessage(): Promise<string | null> {
        await this.toastermsg.waitFor({ state: "visible" });
        return await this.toastermsg.textContent();
    }

    async clickForgotPassword(): Promise<void> {
        await this.forgotbtn.waitFor({ state: 'visible' });
        await this.forgotbtn.click();
        await this.clickonbackbtn.click();
    }

    async rememberCheckBox(): Promise<void> {
        await this.clickonremembercheckbox.waitFor({ state: 'visible' });
        await this.clickonremembercheckbox.click();
    }

    async clickOnProfileBtn(): Promise<void> {
        await this.profilemenubtn.waitFor({ state: "visible" });
        await this.profilemenubtn.click();
    }

    async openProfileMenu(): Promise<void> {
        await this.profilecameraicon.waitFor({ state: "visible" });
        await this.profilecameraicon.click();
    }
}
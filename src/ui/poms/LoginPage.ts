import {Page} from "playwright"
import {Locator} from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly userPassword: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('//input[@name = \'login\']')
        this.userPassword = page.locator('//input[@name = \'password\']')
        this.loginButton = page.locator('//button[@type=\'submit\']')
    }

    async logIn(username: string, password: string) {
        await this.username.fill(username);
        await this.userPassword.fill(password);
        await this.loginButton.click();
    }

    async gotoUrl(url: string) {
        await this.page.goto(url);
    }

}
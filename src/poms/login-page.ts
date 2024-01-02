import {Page} from "playwright";
import {Locator} from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('//input[@name = "login"]')
        this.password = page.locator('//input[@name = "password"]')
        this.loginButton = page.locator('//button[@type="submit"]')
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
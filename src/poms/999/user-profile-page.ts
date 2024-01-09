import {Page} from "playwright"
import {FrameLocator, Locator} from "@playwright/test";
import MainPage from "./main-page";
import {config} from "../../step-definitions/hooks/before-hook";

export default class UserProfilePage {
    readonly page: Page;
    readonly usernameTab: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly successIcon: Locator;
    readonly currentUsername: Locator;
    readonly iframe: FrameLocator;


    constructor(page: Page) {
        this.page = page;
        this.usernameTab = page.locator('//a[contains(@class, "has-icon--username")]');
        this.usernameInput = page.locator('//input[@name ="login"]');
        this.passwordInput = page.locator('//input[@name ="password"]');
        this.submitButton = page.locator('//button[@class="simpalsid-modal-content-form-submit-btn "]');
        this.successIcon = page.locator('//div[@id ="simpalsid-settings-tab-success"]');
        this.currentUsername = page.locator('//span[@class="simpalsid-modal-content-form-control-input is-label"]');
        this.iframe = page.frameLocator('//iframe[@id ="topbar-settings"]');
    }

    async changeUsername(username: string) {
        const mainPage: MainPage = new MainPage(this.page);
        await mainPage.iframe.locator(mainPage.settingsButton).click()
        await this.iframe.locator(this.usernameTab).click();
        await this.iframe.locator(this.usernameInput).fill(username);
        await this.iframe.locator(this.passwordInput).fill(config["999"].credentials.password);
        await this.iframe.locator(this.submitButton).click();
    }

}
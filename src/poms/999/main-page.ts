import {Page} from "playwright"
import {expect, FrameLocator, Locator} from "@playwright/test";

export default class MainPage {

    readonly page: Page;
    readonly usernameDropDown: Locator;
    readonly search: Locator;
    readonly submitSearch: Locator;
    readonly cabinetDropDown: Locator;
    readonly iframe: FrameLocator;
    readonly settingsButton: Locator;
    readonly languageButton: Locator;
    readonly russianLangButton: Locator;
    readonly romanianLangButton: Locator;
    readonly adButtonRussian: Locator;
    readonly adButtonRomanian: Locator;
    readonly recommendations: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cabinetDropDown = page.locator('//div[@data-autotest="cabinet"]')
        this.iframe = page.frameLocator('//iframe[@id="topbar-panel"]');
        this.usernameDropDown = page.locator('//button[@id="user-username-btn"]');
        this.search = page.locator("//input[@id = 'js-search-input']");
        this.submitSearch = page.locator("//button[@type = 'submit']");
        this.settingsButton = page.locator('//span[@class = "user-item-btn-settings-icon"]');
        this.languageButton = page.locator('//button[@class = "user-item-btn"]');
        this.russianLangButton = page.locator('//button[text() = "русский"]');
        this.romanianLangButton = page.locator('//button[@data-lang = "ro"]');
        this.adButtonRussian = page.locator('//a[text() = "Подать объявление"]');
        this.adButtonRomanian = page.locator('//a[text() = "Adaugă "]');
        this.recommendations = page.locator('//a[@class="recommended__item__link  js-item-ad-recommended"]');
    }

    async setLanguage(language: string) {
        await this.iframe.locator(this.languageButton.last()).click();
        if (language === ('russian')) {
            await this.iframe.locator(this.russianLangButton).click();
        }
    }

    async verifyLanguage(language: string) {
        if (language === 'russian') {
            try {
                await this.adButtonRussian.waitFor({state: "visible"});
                return await expect(this.adButtonRussian).toBeVisible();
            } catch (error) {
                await this.page.waitForTimeout(5000);
                await this.adButtonRussian.waitFor({state: "visible"});
                return await expect(this.adButtonRussian).toBeVisible();
            }
        } else {
            try {
                await this.adButtonRomanian.waitFor({state: "visible"})
                return await expect(this.adButtonRomanian).toBeVisible();
            } catch (error) {
                await this.page.waitForTimeout(5000);
                await this.adButtonRomanian.waitFor({state: "visible"})
                return await expect(this.adButtonRomanian).toBeVisible();
            }
        }
    }

}

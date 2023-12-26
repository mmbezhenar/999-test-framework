import {Page} from "playwright"
import {FrameLocator, Locator} from "@playwright/test";
import * as data from "../data.json";

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
    readonly placeAdButton: Locator;


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
        this.placeAdButton = page.locator('//a[text() = "Подать объявление"]');
    }

    async searchProduct() {
        await this.search.click();
        await this.search.fill(data.searchData.product);
        await this.submitSearch.click();
    }

    async setLanguageToRussian() {
        await this.iframe.locator(this.languageButton.last()).click();
        await this.iframe.locator(this.russianLangButton).click();
    }
}
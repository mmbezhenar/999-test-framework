import {Page} from "playwright"
import {Locator} from "@playwright/test";
import {config} from "../test/step_definitions/hooks/before-hook";

export default class MainPage {
    readonly page: Page;
    readonly usernameButton: Locator;
    readonly searchInput: Locator;
    readonly submitSearch: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameButton = page.locator("//button[text() = 'TestPlaywright']")
        this.searchInput = page.locator("//input[@id = 'js-search-input']")
        this.submitSearch = page.locator("//button[@type = 'submit']")
    }

    async searchProduct(){
        await this.searchInput.click();
        await this.searchInput.fill(config.credentials.product);
        await this.submitSearch.click();
    }
}
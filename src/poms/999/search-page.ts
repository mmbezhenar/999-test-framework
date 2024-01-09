import {Page} from "playwright"
import {expect} from "@playwright/test";
import MainPage from "./main-page";

export default class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchProduct(product: string) {
        const mainPage = new MainPage(this.page);
        await mainPage.search.click();
        await mainPage.search.fill(product);
        await mainPage.submitSearch.click();
    }

    async verifyPresenceProduct(product: string) {
        return expect(this.page.locator('//span[contains(text(), "' + product + '")]')).toBeVisible();
    }

}

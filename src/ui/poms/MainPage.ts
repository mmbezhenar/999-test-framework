import {Page} from "playwright"
import {Locator} from "@playwright/test";

export default class MainPage {
    readonly page: Page;
    readonly searchInput: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('//input[@name = \'query\']')
    }
}
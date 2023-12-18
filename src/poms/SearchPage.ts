import {Page} from "playwright"
import {Locator} from "@playwright/test";
import * as data from "../data.json";

export default class SearchPage {
    readonly page: Page;
    readonly resultsTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultsTitle = page.locator('//span[contains(text(), "' + data.searchData.product + '")]');
    }
}
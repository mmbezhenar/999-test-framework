import {Page} from "playwright"
import {Locator} from "@playwright/test";
import {config} from "../test/step_definitions/hooks/before-hook";

export default class SearchPage {
    readonly page: Page;
    readonly resultsTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultsTitle = page.locator("//span[contains(text(), '" + config.credentials.product + "')]");
    }
}
import {Page} from "playwright";
import {Locator} from "@playwright/test";

export class FavoritesPage{

    readonly page: Page;
    readonly item: Locator;

    constructor(page: Page) {
        this.page = page;
        this.item = page.locator('//li[@class=" js-favorites-item favorites-list__items__item  "]');
    }

}

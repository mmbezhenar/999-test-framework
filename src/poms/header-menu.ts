import {Page} from "playwright";
import {Locator} from "@playwright/test";

export class HeaderMenu{
    readonly page: Page;
    readonly favoritesBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.favoritesBtn = page.locator('//a[@class="header_menu_nav__favorites"]');
    }

}
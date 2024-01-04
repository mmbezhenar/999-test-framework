import {Page} from "playwright";
import {Locator} from "@playwright/test";

export class ProductPage{

    readonly page: Page;
    readonly heartBtn: Locator;
    readonly pressedHeartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heartBtn = page.locator('//a[@class=" favorite-toggle js-favorites-toggle is-big  "]');
        this.pressedHeartBtn = page.locator('//a[@class="js-favorites-toggle adPage__aside__stats__favorite-toggle is-sidebar-fav is-active"]');
    }
}
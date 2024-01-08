import {Page} from "playwright";
import {Locator} from "@playwright/test";

export class ProductPage{

    readonly page: Page;
    readonly heartBtn: Locator;
    readonly pressedHeartBtn: Locator;
    readonly showPhoneNumberBtn: Locator;
    readonly phonePrefix: Locator;
    readonly phoneNumber: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heartBtn = page.locator('//a[@class=" favorite-toggle js-favorites-toggle is-big  "]');
        this.pressedHeartBtn = page.locator('//a[@class="js-favorites-toggle adPage__aside__stats__favorite-toggle is-sidebar-fav is-active"]');
        this.showPhoneNumberBtn = page.locator('(//div[@class="js-phone-number-show adPage__content__phone__show__btn"])[2]');
        this.phonePrefix = page.locator('(//span[@class="country is-moldova"])[2]');
        this.phoneNumber = page.locator('(//span[@class="js-phone-number-format number-format"])[2]');
    }

    async getQuickLingLocator(name: string){
        return this.page.locator(`//span//a[@href and text()=" ${name} "]`);
    }

}

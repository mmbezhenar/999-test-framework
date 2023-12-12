import {Page} from "playwright"
import {Locator} from "@playwright/test";

export default class MainPage {
    readonly page: Page;
    readonly usernameButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameButton = page.locator("//button[text() = 'TestPlaywright']")
    }

}
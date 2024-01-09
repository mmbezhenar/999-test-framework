import {Locator} from "@playwright/test";
import {page} from "../../step-definitions/hooks/before-hook";

export class HomePage{

    readonly searchBox: Locator;
    readonly searchBtn: Locator;
    readonly videoItem: Locator;

    constructor() {
        this.searchBox = page.locator('//input[@id="search"]');
        this.searchBtn = page.locator('//button[@id="search-icon-legacy"]');
        this.videoItem = page.locator('//ytd-rich-item-renderer');
    }

}

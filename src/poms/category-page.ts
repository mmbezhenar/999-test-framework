import {Page} from "playwright";
import {Locator} from "@playwright/test";
import {page} from "../step-definitions/hooks/before-hook";

export default class CategoryPage {
    readonly page: Page;
    readonly categoryButton: Locator;
    readonly categoryList: Locator;
    readonly computerCategoryButton: Locator;
    readonly subcategoriesList: Locator;
    readonly laptopCategoryButton: Locator;
    readonly adsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryButton = this.page.locator('//button[@class ="header_bar_categories_toggle"]');
        this.categoryList = this.page.locator('//div[@class = "header_bar_categories"]');
        this.computerCategoryButton = this.page.locator('//li[@data-url="computers-and-office-equipment"]');
        this.subcategoriesList = this.page.locator('//div[@class="header_bar_categories_subcategories"]');
        this.laptopCategoryButton = this.page.locator('//a[text()="Laptopuri"]');
        this.adsList = this.page.locator('//ul[@class ="ads-list-photo large-photo"]');
    }

    async categoryClick(category: string) {
        await this.page.locator(`//li[contains(@data-url,"${category}")]`).click();
    }

    async subCategoryClick(subCategory: string) {
        await this.page.locator(`//a[contains(@href,"${subCategory}")]`).click();
    }

    async categoryButtonClick() {
        try {
            await this.categoryButton.waitFor({state: "visible"})
            await this.categoryButton.click();
        } catch (error) {
            await page.waitForTimeout(5000);
            await page.waitForLoadState('load');
            await this.categoryButton.click();
        }
    }
}
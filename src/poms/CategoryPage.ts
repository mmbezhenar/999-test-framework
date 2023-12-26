import {Page} from "playwright";
import {Locator} from "@playwright/test";

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
        this.categoryButton = page.locator('//button[@class ="header_bar_categories_toggle"]');
        this.categoryList = page.locator('//div[@class = "header_bar_categories"]');
        this.computerCategoryButton = page.locator('//li[@data-url="computers-and-office-equipment"]');
        this.subcategoriesList = page.locator('//div[@class="header_bar_categories_subcategories"]');
        this.laptopCategoryButton = page.locator('//a[text()="Laptopuri"]');
        this.adsList = page.locator('//ul[@class ="ads-list-photo large-photo"]');
    }
}
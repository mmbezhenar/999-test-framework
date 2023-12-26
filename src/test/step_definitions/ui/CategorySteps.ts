import {When} from "@cucumber/cucumber";
import CategoryPage from "../../../poms/CategoryPage";
import {page} from "../hooks/before-hook";
import {expect} from "@playwright/test";

let categoryPage: CategoryPage;
When(/I navigate to the categories section/, async () => {
    categoryPage = new CategoryPage(page);
    await page.waitForLoadState('load');
    await categoryPage.categoryButton.click();
    await expect(categoryPage.categoryList).toBeVisible();
});
When(/I open the computers category/, async () => {
    categoryPage = new CategoryPage(page);
    await categoryPage.computerCategoryButton.click();
    await expect(categoryPage.subcategoriesList).toBeVisible();
});
When(/I browse the available laptop products/, async () => {
    categoryPage = new CategoryPage(page);
    await categoryPage.laptopCategoryButton.click()
    await expect(categoryPage.adsList).toBeVisible();
});
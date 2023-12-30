import {Given, When} from "@cucumber/cucumber";
import CategoryPage from "../../../poms/CategoryPage";
import {page} from "../hooks/before-hook";
import {expect} from "@playwright/test";

When(/I navigate to the categories section/, async () => {
        const categoryPage = new CategoryPage(page);
        await categoryPage.categoryButtonClick();
        await expect(categoryPage.categoryList).toBeVisible();
    }
);
Given(/I open the (.*) category/, async (category: string) => {
    const categoryPage = new CategoryPage(page);
    await categoryPage.categoryClick(category);
    await expect(categoryPage.subcategoriesList).toBeVisible();
});
Given(/I browse the available (.*) products/, async (productType: string) => {
    const categoryPage = new CategoryPage(page);
    await categoryPage.subCategoryClick(productType);
    await categoryPage.adsList.waitFor({state: "visible"});
    await expect(categoryPage.adsList).toBeVisible();
});
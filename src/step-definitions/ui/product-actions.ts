import {Then, When} from "@cucumber/cucumber";
import {page} from "../hooks/before-hook";
import {ProductPage} from "../../poms/product-page";
import {expect} from "@playwright/test";
import CategoryPage from "../../poms/category-page";

When("I select {string} product", async (productUrl) => {
    await page.goto(productUrl);
});

Then("I click on the [Show phone] button", async () => {
    await new ProductPage(page).showPhoneNumberBtn.click();
});

Then("I should be able to see the seller's phone number", async () => {
    const productPage = new ProductPage(page);
    expect(await productPage.phonePrefix.textContent()).toBe("+373");
    expect(await productPage.phoneNumber.isVisible()).toBeTruthy();
});

Then("I click on {string} quick link item", async (linkItem) => {
    await new ProductPage(page).getQuickLingLocator(linkItem).then(
        async (locator) => {
            if(await locator.isHidden()){
               await locator.scrollIntoViewIfNeeded();
            }
            await locator.click();
        }
    );
});

Then("I navigate to the page with products that match the specified criteria {string}", async (linkItem) => {
    expect(await new CategoryPage(page).title.textContent()).toContain(linkItem);
});

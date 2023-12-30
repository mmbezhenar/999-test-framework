import {Then} from "@cucumber/cucumber";
import {page} from "../hooks/before-hook";
import SearchPage from "../../../poms/SearchPage";

Then(/I'm looking for a (.*)/, async (product: string) => {
    const searchPage = new SearchPage(page);
    await searchPage.searchProduct(product);
});
Then(/I see (.*) search results/, async (product: string) => {
    // await expect(page.locator('//span[contains(text(), "' + product + '")]')).toBeVisible();
    const searchPage = new SearchPage(page);
    await searchPage.verifyPresenceProduct(product);
});
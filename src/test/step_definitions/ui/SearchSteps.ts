import {Then} from "@cucumber/cucumber";
import MainPage from "../../../poms/MainPage";
import {page} from "../hooks/before-hook";
import SearchPage from "../../../poms/SearchPage";
import {expect} from "playwright/test";

Then(/^I'm looking for a product/, async () => {
   await new MainPage(page).searchProduct();

});
Then(/^I see search results/, async () => {
    await expect(new SearchPage(page).resultsTitle).toBeVisible();
});
import {Then} from "@cucumber/cucumber";
import MainPage from "../../../poms/MainPage";
import {page} from "../hooks/before-hook";
import SearchPage from "../../../poms/SearchPage";
import {expect} from "playwright/test";

let mainPage: MainPage;
let searchPage: SearchPage;
Then(/^I'm looking for a product/, async () => {
   mainPage = new MainPage(page);
   await mainPage.searchProduct();

});
Then(/^I see search results/, async () => {
    searchPage = new SearchPage(page);
    await expect(searchPage.resultsTitle).toBeVisible();
});
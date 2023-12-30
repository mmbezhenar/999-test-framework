import {Then} from "@cucumber/cucumber";
import UserProfilePage from "../../../poms/UserProfilePage";
import {page} from "../hooks/before-hook";
import Util from "../../../utils/Util";
import {expect} from "@playwright/test";
import MainPage from "../../../poms/MainPage";

let generatedUsername: string;
Then(/^I change the username/, async () => {
    const usernameProfilePage = new UserProfilePage(page);
    generatedUsername = await Util.generateUsername();
    await usernameProfilePage.changeUsername(generatedUsername);
});
Then(/^I verify that the username is successfully changed/, async () => {
    const usernameProfilePage = new UserProfilePage(page);
    await expect(usernameProfilePage.iframe.locator(usernameProfilePage.successIcon)).toBeVisible();
    await expect(usernameProfilePage.iframe.locator(usernameProfilePage.currentUsername)).toHaveText(generatedUsername);
});

Then(/^I verify that the language is changed to (.*)$/, async (language: string) => {
    const mainPage = new MainPage(page);
    await mainPage.verifyLanguage(language);
});

Then(/^I switch to the (.*) language$/, async (language: string) => {
    const mainPage = new MainPage(page);
    await mainPage.setLanguage(language);
});
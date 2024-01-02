import {Then} from "@cucumber/cucumber";
import UserProfilePage from "../../poms/user-profile-page";
import {page} from "../hooks/before-hook";
import RandomGenerator from "../../support/random-generator";
import {expect} from "@playwright/test";
import MainPage from "../../poms/main-page";

let generatedUsername: string;
Then(/^I change the username/, async () => {
    const usernameProfilePage = new UserProfilePage(page);
    generatedUsername = await RandomGenerator.generateUsername();
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
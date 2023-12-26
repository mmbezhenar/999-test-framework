import {Then} from "@cucumber/cucumber";
import UserProfilePage from "../../../poms/UserProfilePage";
import {page} from "../hooks/before-hook";
import Util from "../../../utils/Util";
import {expect} from "@playwright/test";
import MainPage from "../../../poms/MainPage";

let usernameProfilePage: UserProfilePage;
let mainPage: MainPage;
let generatedUsername: string;
Then(/^I change the username/, async () => {
    usernameProfilePage = new UserProfilePage(page);
    generatedUsername = await Util.generateUsername();
    await usernameProfilePage.changeUsername(generatedUsername);
});
Then(/^I verify that the username is successfully changed/, async () => {
    usernameProfilePage = new UserProfilePage(page);
    await expect(usernameProfilePage.iframe.locator(usernameProfilePage.successIcon)).toBeVisible();
    await expect(usernameProfilePage.iframe.locator(usernameProfilePage.currentUsername)).toHaveText(generatedUsername);
});

Then(/I switch the language to Russian/, async () => {
    mainPage = new MainPage(page);
    await mainPage.setLanguageToRussian();
});

Then(/I verify that the language is changed to Russian/, async () => {
    const language = 'русский';
    mainPage = new MainPage(page);
    await expect(mainPage.placeAdButton).toBeVisible();
    await expect(mainPage.iframe.locator(mainPage.languageButton.last())).toHaveText(language);
});
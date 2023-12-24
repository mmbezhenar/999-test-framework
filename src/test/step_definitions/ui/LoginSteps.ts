import {Given, Then, When} from "@cucumber/cucumber";
import {config, page} from "../hooks/before-hook";
import LoginPage from "../../../poms/LoginPage";
import MainPage from "../../../poms/MainPage";
import {expect} from "playwright/test";

let loginPage: LoginPage;
let mainPage: MainPage;


Given(/^I am on the 999.md login page/, async () => {
    await page.goto(config.loginUrl);
});
When(/^I perform login action/, async () => {
    loginPage = new LoginPage(page);
    await loginPage.login(config.credentials.email, config.credentials.password);
});
Then(/^I should be redirected to the home page/, async () => {
    mainPage = new MainPage(page);
    await expect(mainPage.iframe.locator(mainPage.usernameDropDown)).toBeVisible();
});
Then(/^I should see a personal cabinet/, async () => {
    mainPage = new MainPage(page);
    await expect(mainPage.cabinetDropDown).toBeVisible();
});
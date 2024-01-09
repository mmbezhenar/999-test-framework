import {Given, Then, When} from "@cucumber/cucumber";
import {config, page} from "../../hooks/before-hook";
import LoginPage from "../../../poms/999/login-page";
import MainPage from "../../../poms/999/main-page";
import {expect} from "playwright/test";

Given(/^I am on the 999.md login page/, async () => {
        await page.goto(config["999"].loginUrl);
    }
);

When(/^I perform login action/, async () => {
        const loginPage = new LoginPage(page);
        await loginPage.username.waitFor({state: "visible"});
        await loginPage.login(config["999"].credentials.email, config["999"].credentials.password);
    }
);

Then(/^I should be redirected to the home page/, async () => {
        const mainPage = new MainPage(page);
        await expect(mainPage.iframe.locator(mainPage.usernameDropDown)).toBeVisible();
    }
);

Then(/^I should see a personal cabinet/, async () => {
        const mainPage = new MainPage(page);
        await expect(mainPage.cabinetDropDown).toBeVisible();
    }
);

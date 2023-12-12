import {Then} from "@cucumber/cucumber";
import {config, page} from "../hooks/before-hook";
import LoginPage from "../../../poms/LoginPage";
import MainPage from "../../../poms/MainPage";
import {expect} from "playwright/test";


Then(/^I login to 999.md website$/, async () => {
    await page.goto(config.loginUrl);
    await new LoginPage(page).login(config.credentials.username, config.credentials.password);
    await expect(new MainPage(page).usernameButton).toBeVisible();
});
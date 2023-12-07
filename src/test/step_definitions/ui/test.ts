import {Then, When} from "@cucumber/cucumber";
import {page} from "../hooks/before-hook";
import {expect} from "playwright/test";

When(/^I navigate to 999$/, async () => {
    await page.goto('https://999.md/ru/');
});

Then(/^I see Welcome Page$/, async () => {
    expect(await page.locator('//header[@id="header"]').isVisible()).toBeTruthy();
});
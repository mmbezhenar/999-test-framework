import {Before, setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, chromium} from "@playwright/test";
import {Page} from "playwright";
import * as config from "../../../config.json"

let browser: Browser;
let page: Page;

setDefaultTimeout(60000);

Before(async () => {
    browser = await chromium.launch(config.testSetup.local);
    const context = await browser.newContext();
    page = await context.newPage();
});

export {page, browser, config}
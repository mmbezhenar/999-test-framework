import {Before, BeforeAll, setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, BrowserContext, chromium} from "@playwright/test";
import {Page} from "playwright";
import * as config from "../../../config.json"

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60000);

BeforeAll(async () => {
    // browser = await chromium.launch({
    //     headless: false,
    //     args: ['--window-size=1920,1040']
    // })
    browser = await chromium.launch(config.testSetup.local);
});

Before(async () => {
    context = await browser.newContext();
    page = await context.newPage();
});

export {page, browser, context, config}
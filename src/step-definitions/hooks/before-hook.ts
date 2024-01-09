import {Before, BeforeAll, setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, BrowserContext, chromium} from "@playwright/test";
import {Page} from "playwright";
import * as config from "../../../config.json"

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60000);

BeforeAll(async () => {
        browser = await chromium.launch({
            headless: false,
            args: ['--start-maximized']
        });
    }
);

Before(async () => {
        context = await browser.newContext({viewport: null});
        page = await context.newPage();
    }
);

export {page, browser, context, config}

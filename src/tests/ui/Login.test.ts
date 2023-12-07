import {Browser, chromium, expect, Page, test} from '@playwright/test';
import LoginPage from "../../ui/poms/LoginPage";
import {BrowserContext} from "playwright";
import Environment from "../../utils/Environment";
import MainPage from "../../ui/poms/MainPage";

let loginPage: LoginPage;
let mainPage: MainPage;
let browser: Browser;
let page: Page;
let context: BrowserContext;

test.beforeEach(async () => {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    mainPage = new MainPage(page);
    await loginPage.gotoUrl(Environment.threeNineUrl);

})

test('test', async () => {

    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

// Usage:
    await loginPage.logIn('TestPlaywright', 'test123')
    await mainPage.searchInput.waitFor({state: "visible"})
    expect(await mainPage.searchInput.isVisible()).toBe(false);
});



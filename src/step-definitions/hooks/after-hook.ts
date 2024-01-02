import {After, AfterAll} from "@cucumber/cucumber";
import {browser, context} from "./before-hook";

After(async () => {
    // if(scenario.result!.status === Status.FAILED){
    //     const screenshot = await page.screenshot();
    //     await this.attach(screenshot, "image/png");
    // }
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});
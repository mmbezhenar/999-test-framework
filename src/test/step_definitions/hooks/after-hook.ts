import {After, AfterAll, Status} from "@cucumber/cucumber";
import {browser, context, page} from "./before-hook";

After(async (scenario) => {
    // if(scenario.result!.status === Status.FAILED){
    //     const screenshot = await page.screenshot();
    //     await this.attach(screenshot, "image/png");
    // }
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});
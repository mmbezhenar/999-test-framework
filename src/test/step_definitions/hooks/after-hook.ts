import {After} from "@cucumber/cucumber";
import {TestStepResultStatus} from "@cucumber/messages";
import {browser, page} from "./before-hook";

After(async (Scenario) => {
    if(Scenario.result!.status === TestStepResultStatus.FAILED){
       // await this.attach(await page.screenshot())
    }
    await browser.close();
});
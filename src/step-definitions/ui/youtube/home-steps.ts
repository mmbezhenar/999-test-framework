import {Given, Then, When} from "@cucumber/cucumber";
import {config, page} from "../../hooks/before-hook";
import {expect} from "@playwright/test";
import {HomePage} from "../../../poms/youtube/home-page";
import {SearchVideosPage} from "../../../poms/youtube/search-videos-page";
import {VideoPage} from "../../../poms/youtube/video-page";

let result: string;

Given("I navigate to youtube", async () => {
        await page.goto(config.youtube.baseUrl);
    }
);

When("I search for {string} video", async (criteria) => {
        let homePage = new HomePage();
        result = criteria;

        await homePage.searchBox.type(criteria);
        await homePage.searchBtn.click();
    }
);
Then("I see results", async () => {
        expect(await new SearchVideosPage().channelRenderer.textContent()).toContain(result);
    }
);
When("I click on a video thumbnail", async () => {
        await new HomePage().videoItem.nth(0).click();
    }
);
Then("I should be directed to the video playback page", async () => {
        const playBtnLocator = new VideoPage().playBtn;
        await playBtnLocator.waitFor({state: "visible"});
        expect(await playBtnLocator.isVisible()).toBeTruthy();
    }
);
Then("The video should start playing", async () => {
        const playBtnStatus = await new VideoPage().getPlayBtnStatus();
        expect(playBtnStatus.isVisible()).toBeTruthy();
    }
);

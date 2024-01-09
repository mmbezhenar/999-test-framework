import {Locator} from "@playwright/test";
import {page} from "../../step-definitions/hooks/before-hook";

export class SearchVideosPage{

    readonly channelRenderer: Locator;

    constructor() {
        this.channelRenderer = page.locator('//ytd-channel-renderer//div[@id="text-container"]//yt-formatted-string');
    }

}

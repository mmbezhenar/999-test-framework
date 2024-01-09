import {Locator} from "@playwright/test";
import {page} from "../../step-definitions/hooks/before-hook";

export class VideoPage{

    readonly playBtn: Locator;

    constructor() {
        this.playBtn = page.locator('(//button[@class="ytp-play-button ytp-button"])[1]');

    }

    async getPlayBtnStatus(status: string = 'Pause'): Promise<Locator>{
        return page.locator(`//button[@data-title-no-tooltip="${status}"]`);
    }

}

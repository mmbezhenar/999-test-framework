import {Then} from "@cucumber/cucumber";
import UserProfilePage from "../../../poms/UserProfilePage";
import {page} from "../hooks/before-hook";
import Util from "../../../utils/Util";
import {expect} from "@playwright/test";


let usernameProfilePage: UserProfilePage;
let generatedUsername: string;
Then(/^the user changes the username/, async () => {
    usernameProfilePage = new UserProfilePage(page);
    generatedUsername = await Util.generateUsername();
    await usernameProfilePage.changeUsername(generatedUsername);
});
Then(/^the user verifies that the username is successfully changed/, async () => {
    usernameProfilePage = new UserProfilePage(page);
    await expect(usernameProfilePage.iframe.locator(usernameProfilePage.successIcon)).toBeVisible();
    await expect(usernameProfilePage.iframe.locator(usernameProfilePage.currentUsername)).toHaveText(generatedUsername);
});
import {Then, When} from "@cucumber/cucumber";
import {page} from "../../hooks/before-hook";
import {ProductPage} from "../../../poms/999/product-page";
import {HeaderMenu} from "../../../poms/999/header-menu";
import {expect} from "@playwright/test";
import {FavoritesPage} from "../../../poms/999/favorites-page";
import {logger} from "../../../support/logger";

When('I add an {string} item to favorites', async (itemUrl) => {
        await page.goto(itemUrl, {waitUntil: "load"});
        logger.info("Navigating to -> " + itemUrl);

        await new ProductPage(page).heartBtn.click();
    }
);

Then('I navigate to the favorites section', async () => {
        await new HeaderMenu(page).favoritesBtn.click();
    }
);

Then('I should see the added item in the Favorites', async () => {
        expect(await new FavoritesPage(page).item.nth(0).isVisible()).toBeTruthy();
    }
);

Then('I delete {string} from favorites section', async (itemUrl) => {
        await page.goto(itemUrl);
        await new ProductPage(page).pressedHeartBtn.click();
    }
);

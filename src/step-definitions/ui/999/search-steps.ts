import {Then} from "@cucumber/cucumber";
import {page} from "../../hooks/before-hook";
import SearchPage from "../../../poms/999/search-page";

Then(/I'm looking for a (.*)/, async (product: string) => {
        const searchPage = new SearchPage(page);
        await searchPage.searchProduct(product);
    }
);
Then(/I see (.*) search results/, async (product: string) => {
        const searchPage = new SearchPage(page);
        await searchPage.verifyPresenceProduct(product);
    }
);

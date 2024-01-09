import {Given, Then} from "@cucumber/cucumber";
import {authResponse, RestClient, token} from "../../../support/rest-client";
import {expect} from "@playwright/test";

let restClient = new RestClient();

Given('I log in with default credentials', async () => {
        await restClient.authenticate();
        expect(authResponse.ok()).toBeTruthy();
    }
);

Then('I get auth token', async () => {
        await restClient.getToken();
        expect(token).not.toBeNull();
    }
);

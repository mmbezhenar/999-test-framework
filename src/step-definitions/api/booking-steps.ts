import {Then, When} from "@cucumber/cucumber";
import {RestClient} from "../../support/rest-client";
import {APIResponse} from "playwright";
import {logger} from "../../support/logger";
import {expect} from "@playwright/test";

let restClient = new RestClient();
let response: APIResponse;

When('I request all booking IDs', async () => {
    response = await restClient.get("/booking");
});

Then('I should receive a response containing an array of booking IDs', async () => {
    const responseBody = await restClient.getResponseBody(response);
    logger.info(responseBody);
    expect(responseBody.length).toBeGreaterThan(0);
});
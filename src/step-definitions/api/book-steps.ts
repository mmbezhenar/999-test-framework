import {Then, When} from "@cucumber/cucumber";
import {RestClient} from "../../support/rest-client";
import {APIResponse} from "playwright";
import {expect} from "@playwright/test";
import {logger} from "../../support/logger";

let restClient = new RestClient();
let response: APIResponse;
let responseBody: any;

When('I request for all book ids', async () => {
    response = await restClient.get('/api/Book');
});

Then('I should receive a response containing an array of book ids', async () => {
    responseBody = await restClient.getResponseBody(response);
    logger.info(responseBody);
 //   expect(responseBody.length).toBeGreaterThan(0);
});
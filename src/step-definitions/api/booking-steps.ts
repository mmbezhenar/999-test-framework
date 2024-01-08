import {Then, When} from "@cucumber/cucumber";
import {RestClient} from "../../support/rest-client";
import {APIResponse} from "playwright";
import {logger} from "../../support/logger";
import {expect} from "@playwright/test";
import {config} from "../hooks/before-hook.api";

let restClient = new RestClient();
let response: APIResponse;
let responseBody: any;

When('I request all booking IDs', async () => {
    response = await restClient.get("/booking", config.restfulBookerUrl);
});

Then('I should receive a response containing an array of booking IDs', async () => {
    responseBody = await restClient.getResponseBody(response);
    logger.info(responseBody);
    expect(responseBody.length).toBeGreaterThan(0);
});

When('I request booking IDs with the filter {string}, {string}', async (queryParam, value) => {
    const params = {
        [queryParam]: value
    }
    response = await restClient.get("/booking", config.restfulBookerUrl, params);
    responseBody = await restClient.getResponseBody(response);
    logger.info(response.url());
});

When('I should receive a response containing an array of booking IDs that match the specified filter {string}', async (value) => {
    response = await restClient.get("/booking" + `/${responseBody[0].bookingid}`, config.restfulBookerUrl);
    logger.info(response.url());
    responseBody = await restClient.getResponseBody(response);
    logger.info(responseBody);
    expect(responseBody.firstname).toBe(value);
});
import {Then, When} from "@cucumber/cucumber";
import {logger} from "../../../support/logger";
import {RestClient} from "../../../support/rest-client";
import {APIResponse} from "playwright";
import {expect} from "@playwright/test";
import {PetsClient} from "../../../support/pets-client";

let petsClient = new PetsClient();
let restClient = new RestClient();
let response: APIResponse;
let responseBody: any;
When('I request pets IDs with the filter {string}, {string}', async (queryParam, value) => {
        const params = {
            [queryParam]: value
        }
        response = await petsClient.getPets("/pet/findByStatus", params);
        responseBody = await restClient.getResponseBody(response);
        logger.info(response.url());
    }
);


Then('I should receive a response containing an array of pets IDs that match the specified filter {string}', async (value) => {
        logger.info(response.url());
        responseBody = await restClient.getResponseBody(response);
        logger.info(responseBody);
        expect(responseBody[0].status).toBe(value);
    }
);

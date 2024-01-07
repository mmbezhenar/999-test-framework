import {Then, When} from "@cucumber/cucumber";
import {logger} from "../../support/logger";
import {RestClient} from "../../support/rest-client";
import {APIResponse} from "playwright";
import {PetStoreDto} from "../../support/dto/pet-store-dto";
import {PetsClient} from "../../support/pets-client";
import {expect} from "@playwright/test";

let petsClient = new PetsClient();
let restClient = new RestClient();
let petStoreDto: PetStoreDto;
let response: APIResponse;
let responseBody: any;
When('I send a PUT request to edit a Pet in Store', async (table) => {
    const dataTable = table.hashes();
    const firstRow = dataTable[0];
    petStoreDto = {
        category: {
            name: firstRow.categoryName
        },
        name: firstRow.name,
        status: firstRow.status
    };
    logger.info(petStoreDto);
    response = await petsClient.putPets('/pet', petStoreDto);
    responseBody = await restClient.getResponseBody(response);
});
Then('I should see that the pet was edited successfully', async () => {
    logger.info(responseBody);
    expect(response.status()).toBe(200);
});
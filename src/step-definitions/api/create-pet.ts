import {APIResponse} from "playwright";
import {Then, When} from "@cucumber/cucumber";
import {logger} from "../../support/logger";
import {PetStoreDto} from "../../support/dto/pet-store-dto";
import {expect} from "@playwright/test";
import {PetsClient} from "../../support/pets-client";

let petsClient = new PetsClient();
let petStoreDto: PetStoreDto;
let response: APIResponse;

When('I send a POST request to create a pet', async (table) => {
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

    response = await petsClient.postPets('/pet', petStoreDto);
});

Then('I should see that the pet was created successfully', async () => {
    logger.info("Create pet status - " + response.status());
    expect(response.status()).toBe(200);
});
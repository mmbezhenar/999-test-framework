import {Then, When} from "@cucumber/cucumber";
import {RestClient} from "../../../support/rest-client";
import {BookingDTO} from "../../../dto/booking-dto";
import {logger} from "../../../support/logger";
import {APIResponse} from "playwright";
import {expect} from "@playwright/test";
import {config} from "../../hooks/before-hook.api";

let restClient = new RestClient();
let bookingData: BookingDTO;
let response: APIResponse;

When('I send a POST request to create a booking', async (table) => {
        const dataTable = table.hashes();
        const firstRow = dataTable[0];

        bookingData = {
            firstname: firstRow.firstname,
            lastname: firstRow.lastname,
            totalprice: parseInt(firstRow.totalprice),
            depositpaid: firstRow.depositpaid === 'true',
            bookingdates: {
                checkin: firstRow.checkin,
                checkout: firstRow.checkout,
            },
            additionalneeds: firstRow.additionalneeds,
        };
        logger.info(bookingData);

        response = await restClient.post('/booking', config.restfulBookerUrl, bookingData);
    }
);

Then('I should see that the booking was created successfully', async () => {
        logger.info("Create booking status - " + response.status());
        expect(response.status()).toBe(200);
    }
);

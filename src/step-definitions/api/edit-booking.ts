import {RestClient} from "../../support/rest-client";
import {BookingDTO} from "../../support/dto/booking-dto";
import {APIResponse} from "playwright";
import {Then, When} from "@cucumber/cucumber";
import {logger} from "../../support/logger";

let restClient = new RestClient();
let bookingData: BookingDTO;
let response: APIResponse;

When('I send a PUT request to edit a booking', async (table) => {
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

    response = await restClient.put('/booking/7', bookingData);

});

Then('I should see that the booking was edited successfully', async () => {
    logger.info(response.status());
   //  expect(responseBody.firstname).toBe("James");
});

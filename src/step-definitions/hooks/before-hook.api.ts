import {APIRequestContext, request} from "playwright";
import {BeforeAll} from "@cucumber/cucumber";
import * as config from "../../../config.json";

let requestContext: APIRequestContext;

BeforeAll(async () => {
        requestContext = await request.newContext(
            {ignoreHTTPSErrors: true}
        );
    }
);

export {requestContext, config}

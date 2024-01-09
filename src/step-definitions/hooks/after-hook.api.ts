import {AfterAll} from "@cucumber/cucumber";
import {requestContext} from "./before-hook.api";

AfterAll(async () => {
        await requestContext.dispose();
    }
);

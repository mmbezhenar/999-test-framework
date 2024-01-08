import {APIResponse} from "playwright";
import {RestClient} from "./rest-client";
import {config} from "../step-definitions/hooks/before-hook.api";

let restClient: RestClient = new RestClient();

export class PetsClient {

    async getPets(endpoint: string, params = {}): Promise<APIResponse> {
        return restClient.get(endpoint, config.petStoreUrl, params);
    }

    async postPets(endpoint: string, params = {}): Promise<APIResponse> {
        return restClient.post(endpoint, config.petStoreUrl, params);
    }

    async putPets(endpoint: string, params = {}): Promise<APIResponse> {
        return restClient.put(endpoint, config.petStoreUrl, params);
    }
}
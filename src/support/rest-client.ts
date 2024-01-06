import {APIResponse} from "playwright";
import {config, requestContext} from "../step-definitions/hooks/before-hook.api";
import {logger} from "./logger";

let authResponse: APIResponse;
let token: string;

export class RestClient {

    private static setHeaders() {
        return {
            'Content-Type': 'application/json',
            //  'Authorization': 'Bearer' + token
        };
    }

    async authenticate() {
        authResponse = await requestContext.post(config.restfulBookerUrl + "/auth", {
            data: {
                username: config.restfulBookerCredentials.username,
                password: config.restfulBookerCredentials.password
            }
        });
    }

    async get(endpoint: string, params = {}): Promise<APIResponse> {
        return requestContext.get(config.restfulBookerUrl + endpoint,
            {
                headers: RestClient.setHeaders(),
                params: params
            }
        );
    }
    async getPets(endpoint: string, params = {}): Promise<APIResponse> {
        return requestContext.get(config.petStoreUrl + endpoint,
            {
                headers: RestClient.setHeaders(),
                params: params
            }
        );
    }

    async post(endpoint: string, params = {}): Promise<APIResponse> {
        return requestContext.post(config.restfulBookerUrl + endpoint,
            {
                headers: RestClient.setHeaders(),
                data: params
            }
        );
    }

    async put(endpoint: string, params = {}): Promise<APIResponse> {
        return requestContext.put(config.restfulBookerUrl + endpoint,
            {
                headers: {
                    'Authorization': `Basic ${await this.getToken()}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: params
            }
        );
    }

    async delete(endpoint: string): Promise<APIResponse> {
        return requestContext.get(config.restfulBookerUrl + endpoint,
            {
                headers: RestClient.setHeaders()
            }
        );
    }

    async getToken() {
        token = await authResponse.body().then(
            buffer => {
                let data = JSON.parse(buffer.toString());
                return data.token;
            }
        );
        logger.info(token);
        return token;
    }

    public getResponseBody = async (response: APIResponse) => {
        return await response.body().then(
            (response) => {
                return JSON.parse(response.toString());
            }
        );
    }

}

export {token, authResponse}
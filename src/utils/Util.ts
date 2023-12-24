import {config} from "../test/step_definitions/hooks/before-hook";

export default class Util {

    static generatedUsername: string;

    static async generateUsername() {
        this.generatedUsername = config.credentials.username + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return this.generatedUsername;
    }

}
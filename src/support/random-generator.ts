import {config} from "../step-definitions/hooks/before-hook";

export default class RandomGenerator {

    static generatedUsername: string;


    static async generateUsername() {
        this.generatedUsername = config["999"].credentials.username + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return this.generatedUsername;
    }

    static generateRandomNumber(): string {
        const defaultMin = 1;
        const defaultMax = 1000;
        const ransomNumber = Math.floor(Math.random() * (defaultMax - defaultMin + 1)) + defaultMin;
        return ransomNumber.toString();
    }

}

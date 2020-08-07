import IURLValidationResult from "./interfaces/IURLValidationResult";

export default class URLValidator {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public urlIsNotEmpty(creation: boolean): IURLValidationResult {
        if (!this.url)
            return {
                isValid: false,
                message: "URL is empty"
            };

        if (!creation)
        {
            return {
                isValid: true,
                message: "URL is not empty"
            }
        }
        
        return {
            isValid: true,
            message: "URL created"
        }
    }
}
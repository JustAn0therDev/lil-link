import IURLValidationResult from "./interfaces/IURLValidationResult";

export default class URLValidator {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public urlIsNotEmpty(): IURLValidationResult {
        if (!this.url)
            return {
                isValid: false,
                message: "Invalid URL"
            };
        
        return {
            isValid: true,
            message: "URL created"
        }
    }
}
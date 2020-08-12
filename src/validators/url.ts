import IUrlResponse from "../interfaces/IUrlResponse"

export default class UrlValidator {
    public static validateUrl(url: string): IUrlResponse {
        if (!url || !url.includes("http"))
            return { message: "Invalid URL" }
        
        return { message: "Valid URL" }
    }
}
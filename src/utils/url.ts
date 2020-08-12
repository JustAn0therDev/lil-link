import { v1 as uuidv1 } from 'uuid'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlUtils {
    public static getOnlyFirstPartOfId(): string {
        return uuidv1().split('-')[0]
    }

    public static removeWhiteSpacesFromUrl(url: string): string {
        return url.replace(/\s/g, '')
    }

    public static createResponseFromRetrivedUrl(url: string): IUrlResponse {
        if (!url)
            return { message: "No URL found." }

        return { message: "URL retrieved successfully.", url }
    }
}
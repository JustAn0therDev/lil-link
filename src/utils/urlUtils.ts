import { v1 as uuidv1 } from 'uuid'

export default class UrlUtils {
    public static getOnlyFirstPartOfId(): string {
        return uuidv1().split('-')[0]
    }

    public static removeWhiteSpacesFromUrl(url: string) {
        return url.replace(/\s/g, '')
    }
}
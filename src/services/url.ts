import IURLValidationResult from '../validators/interfaces/IURLValidationResult'
import IGetURLByUuidResponse from '../services/interfaces/IGetURLByUuidResponse'
import Url from '../database/url'

const urlDatabase = new Url()

export default class URLServices {
    public async getURL(uuid: string): Promise<IGetURLByUuidResponse> {
        const url = await urlDatabase.getURLByUuid(uuid)
        return {
            url,
            message: "URL retrieved successfully."
        }
    }

    public createURL(url: string): IURLValidationResult {
        const id = urlDatabase.writeURL(url);
        return {
            isValid: id ? true : false,
            message: "URL successfully created.",
            id
        }
    }
}
import UrlUtils from '../utils/url'
import UrlDatabase from '../database/url'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlServices {
    public getURL(uuid: string): IUrlResponse {
        const urlInterfaceToDatabase = new UrlDatabase()
        return urlInterfaceToDatabase.getURLFromFile(uuid)
    }

    public async createURL(url: string): Promise<IUrlResponse> {
        const urlInterfaceToDatabase = new UrlDatabase()

        let id = UrlUtils.getOnlyFirstPartOfId()
        url = UrlUtils.removeWhiteSpacesFromUrl(url)

        return await urlInterfaceToDatabase.writeURL(id, url);
    }
}
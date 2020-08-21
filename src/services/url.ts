import UrlUtils from '../utils/url'
import UrlDatabase from '../database/url'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlServices {
    public async getUrl(uuid: string): Promise<IUrlResponse> {
        const urlInterfaceToDatabase = new UrlDatabase()
        return await urlInterfaceToDatabase.getUrlByUuid(uuid)
    }

    public async createUrl(url: string): Promise<IUrlResponse> {
        const urlInterfaceToDatabase = new UrlDatabase()

        let id = UrlUtils.getOnlyFirstPartOfId()
        url = UrlUtils.removeWhiteSpacesFromUrl(url)

        return await urlInterfaceToDatabase.insertUrl(id, url);
    }
}
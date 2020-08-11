import Url from '../database/url'
import IUrlResponse from '../validators/interfaces/IUrlResponse'

const urlInterfaceToDatabase = new Url()

export default class UrlServices {
    public async getURL(uuid: string): Promise<IUrlResponse> {
        return await urlInterfaceToDatabase.getURLByUuid(uuid)
    }

    public async createURL(url: string): Promise<IUrlResponse> {
        return await urlInterfaceToDatabase.writeURL(url);
    }
}
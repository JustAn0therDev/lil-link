import Url from '../database/url'
import IUrlResponse from '../validators/interfaces/IUrlResponse'

export default class UrlServices {
    public async getURL(uuid: string): Promise<IUrlResponse> {
        const urlInterfaceToDatabase = new Url()
        return await urlInterfaceToDatabase.getURLFromFile(uuid)
    }

    public async createURL(url: string): Promise<IUrlResponse> {
        const urlInterfaceToDatabase = new Url()
        return await urlInterfaceToDatabase.writeURL(url);
    }
}
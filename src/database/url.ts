import { Sequelize } from 'sequelize'
import UrlUtils from '../utils/url'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlDatabase {
    public dbConnection: Sequelize

    constructor() { 
        this.dbConnection = new Sequelize('database.db')
     }

    public getURLFromFile(uuid: string): IUrlResponse {
        var url = ''

        return UrlUtils.createResponseFromRetrivedUrl(url)
    }

    public async writeURL(id: string, url: string): Promise<IUrlResponse> {
        this.insertInDatabase(id, url)
        return {
            id,
            message: "Shortened URL successfully generated."
        }
    }

    private insertInDatabase(id: string, url: string): void {
    }
}
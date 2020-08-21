import knex from 'knex'
import UrlUtils from '../utils/url'
import databaseConnection from './databaseConnection'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlDatabase {
    private db: knex

    constructor() { 
        this.db = databaseConnection
     }

    public async getUrlByUuid(uuid: string): Promise<IUrlResponse> {
        const returnFromDatabase = await this.db('urls').select('url').where('uuid', uuid).first()
        return UrlUtils.createResponseFromRetrivedUrl(returnFromDatabase.url)
    }

    public async insertUrl(id: string, url: string): Promise<IUrlResponse> {
        await this.db('urls').insert({ uuid: id, url })
        return {
            id, message: "Shortened URL successfully generated."
        }
    }
}
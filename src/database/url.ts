import fs from 'fs'
import readline from 'readline'
import UrlUtils from '../utils/url'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlDatabase {
    public fileName: string

    constructor() { this.fileName = "database.txt" }

    public async getURLFromFile(uuid: string): Promise<IUrlResponse> {
        const lineReader = readline.createInterface({ input: fs.createReadStream(this.fileName) })
        let url = ''

        for await (const line of lineReader) {
            let lineContent = line.split(' ')
            if (uuid == lineContent[0])
            {
                url = lineContent[1]
                break
            }
        }
        lineReader.close()

        return UrlUtils.createResponseFromRetrivedUrl(url)
    }

    public async writeURL(id: string, url: string): Promise<IUrlResponse> {
        this.writeToFile(id, url)
        return {
            id,
            message: "Shortened URL successfully generated."
        }
    }

    private writeToFile(id: string, url: string): void {
        if (fs.existsSync(this.fileName)) 
            fs.appendFileSync(this.fileName, `${id} ${url}\n`)
        else 
            fs.writeFileSync(this.fileName, `${id} ${url}\n`)
    }
}
import fs from 'fs'
import readline from 'readline'
import UrlUtils from '../utils/urlUtils'
import UrlValidator from '../validators/url'
import IUrlResponse from '../validators/interfaces/IUrlResponse'

export default class Url {
    private fileName: string

    //TODO: dotenv.
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

        return UrlValidator.createResponseFromRetrivedUrl(url)
    }

    public async writeURL(url: string): Promise<IUrlResponse> {
        let id = UrlUtils.getOnlyFirstPartOfId()

        await UrlValidator.checkIfUuidAlreadyExists(this.fileName, id)

        url = UrlUtils.removeWhiteSpacesFromUrl(url)
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
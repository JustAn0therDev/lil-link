import readline from 'readline'
import fs from 'fs'
import UrlUtils from '../utils/urlUtils'

export default class Url {
    private fileName: string

    constructor() {
        this.fileName = "database.txt"
    }

    public async getURLByUuid(uuid: string): Promise<string> {
        return await this.getURLFromFile(uuid)
    }

    private async getURLFromFile(uuid: string): Promise<string> {
        let url = ''
        try {
            const lineReader = readline.createInterface({ input: fs.createReadStream(this.fileName) })
            for await (const line of lineReader) {
                let lineContent = line.split(' ')
                if (uuid == lineContent[0])
                {
                    url = lineContent[1]
                    break
                }
            }
            lineReader.close()
        }
        catch (error) {
            console.log(error)
            url = ''
        }
        return url
    }

    public writeURL(url: string): string {
        const id = UrlUtils.getOnlyFirstPartOfId()
        try {
            url = UrlUtils.removeWhiteSpacesFromUrl(url)

            if (!fs.existsSync(this.fileName))
                fs.writeFileSync(this.fileName, `${id} ${url}\n`)
            else
                fs.appendFileSync(this.fileName, `${id} ${url}\n`)
        }
        catch(errorMessage) {
            console.log(errorMessage)
        }
        return id
    }
}
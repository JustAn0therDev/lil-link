import IURLValidationResult from '../validators/interfaces/IURLValidationResult'
import IGetURLByUuidResponse from '../services/interfaces/IGetURLByUuidResponse'
import { v1 as uuidv1 } from 'uuid'
import * as fs from 'fs'
import readline from 'readline'

export default class URLServices {
    private fileName: string
    private errorMessage: string

    constructor() {
        this.fileName = 'database.txt'
    }

    public async getURL(uuid: string): Promise<IGetURLByUuidResponse> {

        const url = await this.getURLByUuid(uuid)

        return {
            url,
            message: url ? "URL retrieved successfully." : this.errorMessage
        }
    }

    public createURL(url: string): IURLValidationResult {
        const id = this.writeURL(url);
        return {
            isValid: id ? true : false,
            message: id ? "URL successfully created." : this.errorMessage,
            id
        }
    }


    private async getURLByUuid(uuid: string): Promise<string> {
        try {
            let url = ""
            const lineReader = readline.createInterface({
                input: fs.createReadStream('database.txt')
            });

            for await (const line of lineReader) {
                console.log(line)
                url = line.split(' ')[1]
            }
    
            lineReader.close()

            return url
        }
        catch (errorMessage) {
            this.errorMessage = errorMessage
            return ""
        }
    }


    private writeURL(url: string): string {
        const id = uuidv1()
        try {
            url = url.trim()
            
            fs.appendFileSync("database.txt", `${id} ${url}\n`)
            return id
        }
        catch(errorMessage) {
            this.errorMessage = errorMessage
            return ""
        }
    }
}
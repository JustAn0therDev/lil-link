import fs from 'fs'
import readline from 'readline'
import IUrlResponse from "./interfaces/IUrlResponse"

export default class UrlValidator {
    public static validateUrl(url: string): IUrlResponse {
        if (!url || !url.includes("http"))
            return {
                message: "Invalid URL"
            }
        
        return { message: "Valid URL" }
    }

    public static async checkIfUuidAlreadyExists(fileName: string,  uuid: string): Promise<void> {
        const lineReader = readline.createInterface({ 
            input: fs.createReadStream(fileName) 
        })
        for await (const line of lineReader) {
            if (line.includes(uuid)) 
                throw "Generated id already exists in the database. Please generate another."
        }

        lineReader.close()
    }

    public static createResponseFromRetrivedUrl(url: string): IUrlResponse {
        if (!url)
            return { message: "No URL found." }

        return { message: "URL retrieved successfully.", url }
    }
}
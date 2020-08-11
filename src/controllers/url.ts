import UrlServices from '../services/url'
import { Request, Response } from 'express'
import UrlValidator from '../validators/url'
import IUrlResponse from '../validators/interfaces/IUrlResponse'

const urlServices = new UrlServices();

export default class UrlController {
    public async get(req: Request, res: Response): Promise<Response<any>> {
        try {
            const response: IUrlResponse = await urlServices.getURL(req.params.uuid)
            return res.status(response.url ? 200 : 204).json(response)
        }
        catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    public async post(req: Request, res: Response): Promise<Response<any>> {
        try {
            let validationResult = UrlValidator.validateUrl(req.body.url)
    
            if (validationResult.message.toLowerCase().includes("invalid"))
                return res.status(400).json(validationResult)
    
            const response: IUrlResponse = await urlServices.createURL(req.body.url)
    
            return res.status(201).json(response)
        }
        catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}
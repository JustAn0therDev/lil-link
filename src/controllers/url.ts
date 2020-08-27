import UrlServices from '../services/url'
import { Request, Response } from 'express'
import UrlValidator from '../validators/url'
import IUrlResponse from '../interfaces/IUrlResponse'

export default class UrlController {
    public async get(req: Request, res: Response): Promise<Response<IUrlResponse>> {
        try {
            const response: IUrlResponse = await new UrlServices().getUrl(req.params.uuid)
            return res.status(response.url ? 200 : 204).json(response)
        }
        catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    public async post(req: Request, res: Response): Promise<Response<IUrlResponse>> {
        try {
            const validationResult: IUrlResponse = UrlValidator.validateUrl(req.body.url)
    
            if (validationResult.message.includes("Invalid"))
                return res.status(400).json(validationResult)
    
            const response: IUrlResponse = await new UrlServices().createUrl(req.body.url)
            return res.status(201).json(response)
        }
        catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}
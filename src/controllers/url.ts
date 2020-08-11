import { Request, Response } from 'express';
import URLValidator from '../validators/url';
import URLServices from '../services/url';
import IGetURLByUuidResponse from '../services/interfaces/IGetURLByUuidResponse';

const urlServices = new URLServices();

export default class URLController {
    public async get(req: Request, res: Response): Promise<Response<any>> {
        const response: IGetURLByUuidResponse = await urlServices.getURL(req.params.uuid)

        return res.status(response.url ? 200 : 302).json(response)
    }

    public post(req: Request, res: Response): Response<any> {
        const urlValidator = new URLValidator(req.body.url);
        let validationResult = urlValidator.urlIsNotEmpty();

        if (!validationResult.isValid)
            return res.status(400).json(validationResult);

        return res.status(201).json(urlServices.createURL(req.body.url));
    }
}
import { Request, Response } from 'express';
import URLValidator from '../validators/url';

export default class URLController {
    public get(req: Request, res: Response) {
        //TODO: GET URLID FROM ROUTE PARAMS
    }

    //This method creates a URL in the URL File/Database
    public post(req: Request, res: Response): Response<any> {
        const urlValidator = new URLValidator(req.body.url);

        let validationResult = urlValidator.urlIsNotEmpty(true);

        if (!validationResult.isValid)
            return res.status(400).json(validationResult);

        return res.status(201).json(validationResult);
    }
}
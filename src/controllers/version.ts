import { Request, Response } from "express";
import VersionService from '../services/version';

export default class VersionController {
    public get(req: Request, res: Response): Response<any> {
        return res.json({ version: new VersionService().getVersion() });
    }
}
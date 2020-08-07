import { Request, Response } from "express";
import VersionService from '../services/version';

const versionService = new VersionService();

export default class VersionController {
    public get(req: Request, res: Response): Response<any> {
        return res.json({ version: versionService.getVersion() });
    }
}
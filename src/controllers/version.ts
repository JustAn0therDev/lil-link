import { Request, Response } from "express";
import service from '../services/version';

export default {
    get: (req: Request, res: Response) => {
        return res.json({ version: service.getVersion() });
    }
}
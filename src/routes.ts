import { Router } from 'express'
import VersionController from './controllers/version'
import URLController from './controllers/url';

const versionController = new VersionController();
const urlController = new URLController();
const routes = Router();

routes.get('/:urlId', urlController.get);
routes.get('/version', versionController.get);
routes.post('/url', urlController.post);

export default routes;
import { Router } from 'express'
import version from './controllers/version'

const routes: Router = Router();

routes.get('/version', version.get);

export default routes;
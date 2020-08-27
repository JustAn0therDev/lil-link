import { Router } from 'express'
import URLController from './controllers/url'
import VersionController from './controllers/version'

const versionController = new VersionController()
const urlController = new URLController()
const routes = Router()

routes.get('/version', versionController.get)

routes.get('/:uuid', urlController.get)
routes.post('/url', urlController.post)

export default routes
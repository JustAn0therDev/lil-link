import { Router } from 'express'
import URLController from './controllers/url'
import VersionController from './controllers/version'

const routes = Router()
const urlController = new URLController()
const versionController = new VersionController()

routes.get('/version', versionController.get)
routes.get('/:uuid', urlController.get)

routes.post('/url', urlController.post)

export default routes
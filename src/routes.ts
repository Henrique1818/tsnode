import { Router } from 'express'

import UserController from './Controllers/UserControllers'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes

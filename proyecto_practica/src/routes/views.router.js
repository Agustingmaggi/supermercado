import { Router } from "express"
import { validateJWT } from '../middlewares/jwtExtractor.js';

// import BaseRouter from './BaseRouter.js'
import ViewsController from '../controllers/Views.Controller.js'

const router = Router()

// class ViewsRouter extends BaseRouter {
//     init() {
router.get('/', ViewsController.home)
router.get('/register', ViewsController.register)
// router.get('/login', ViewsController.login)
router.get('/login', ViewsController.login)
router.get('/profile', ViewsController.profile)
router.get('/profileJWT', ViewsController.profileJWT)
router.get('/carrito', validateJWT, ViewsController.carrito)
//     }
// }

export default router
import { Router } from "express"
import BaseRouter from './BaseRouter.js';
import CartsController from '../controllers/CartsController.js'
import { validateJWT } from "../middlewares/jwtExtractor.js";

const router = Router()
// class CartsRouter extends BaseRouter {
//     init() {
router.get('/:cid', validateJWT, CartsController.getCart)
router.post('/', CartsController.createCart)
router.put('/products', CartsController.updateCart)
//     }
// }

export default router
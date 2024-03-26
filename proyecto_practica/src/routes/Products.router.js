import BaseRouter from './BaseRouter.js';
import { Router } from "express"
import uploader from '../services/uploadService.js'
import ProductsController from '../controllers/ProductsController.js'

const router = Router()

// class ProductsRouter extends BaseRouter {
//     init() {
router.get('/:pid', ProductsController.getProduct)
router.post('/', uploader.array('images'), ProductsController.createProducts)
router.put('/:pid', ProductsController.updateProduct)
router.delete('/:pid', ProductsController.deleteProduct)
//     }
// }


// const productsRouter = new ProductsRouter()

export default router
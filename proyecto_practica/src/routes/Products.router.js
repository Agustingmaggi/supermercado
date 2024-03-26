import BaseRouter from './BaseRouter.js';
import uploader from '../services/uploadService.js'
import ProductsController from '../controllers/ProductsController.js'

class ProductsRouter extends BaseRouter {
    init() {
        this.get('/:pid', ProductsController.getProduct)
        this.post('/', uploader.array('images'), ProductsController.createProducts)
        this.put('/:pid', ProductsController.updateProduct)
        this.delete('/:pid', ProductsController.deleteProduct)
    }
}


const productsRouter = new ProductsRouter()

export default productsRouter.getRouter()
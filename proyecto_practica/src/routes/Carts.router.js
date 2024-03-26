import BaseRouter from './BaseRouter.js';
import CartsController from '../controllers/CartsController.js'

class CartsRouter extends BaseRouter {
    init() {
        this.get('/:cid', CartsController.getCart)
        this.post('/', CartsController.createCart)
    }
}

const cartsRouter = new CartsRouter();

export default cartsRouter.getRouter();
import cartManager from "../mongo/managers/CartsDao.js";

const cartService = new cartManager();

const cartSetter = async (req, res, next) => {
    if (!req.cookies.cart && !req.user) {
        const cart = await cartService.createCart();
        res.cookie('cart', cart._id.toString())
    }

    next();
}

export default cartSetter;
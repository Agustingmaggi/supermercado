import cartsModel from "../models/cartsModel.js";

export default class CartsDao {

    getCart = (cartId, options = {}) => {
        if (options.populate) {
            return cartsModel.findOne({ _id: cartId }).populate('products.product').lean();
        }
        return cartsModel.findOne({ _id: cartId })
    }

    createCart = (cart) => {
        return cartsModel.create(cart)
    }

    updateCart = (cartId, cart) => {
        return cartsModel.updateOne({ _id: cartId }, { $set: cart });
    }

}
import cartsModel from "../models/cartsModel.js";

export default class CartsDao {

    getCart = (cid) => {
        return cartsModel.findOne({ _id: cid })
    }

    createCart = (cart) => {
        return cartsModel.create(cart)
    }
}
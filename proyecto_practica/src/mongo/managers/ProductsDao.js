import productsModel from "../models/productsModel.js"

export default class ProductsDao {
    getProduct = (pid) => {
        return productsModel.findOne({ _id: pid })
    }

    getProducts = () => {
        return productsModel.find()
    }

    createProduct = (product) => {
        return productsModel.create(product)
    }

    updateProduct = (pid, product) => {
        return productsModel.updateOne({ _id: pid }, { $set: product })
    }

    deleteProduct = (pid) => {
        return productsModel.deleteOne({ _id: pid })
    }
}
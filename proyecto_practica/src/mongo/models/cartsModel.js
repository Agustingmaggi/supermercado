import mongoose from 'mongoose'

const collection = "Carts"

const productsSubschema = new mongoose.Schema({
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'products'
    },
    quantity: {
        type: Number,
        default: 1
    }
}, { _id: false })

const schema = new mongoose.Schema({
    products: [productsSubschema],
    total: {
        type: Number,
        default: 0
    }
})


const cartsModel = mongoose.model(collection, schema)
export default cartsModel
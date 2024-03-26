import mongoose from 'mongoose'

const collection = "Products"

const schema = new mongoose.Schema({
    title: String,
    price: Number,
    images: {
        type: Array,
        default: []
    },
})

const productModel = mongoose.model(collection, schema)

export default productModel
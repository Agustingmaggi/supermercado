import mongoose from 'mongoose'

const collection = "products"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true,
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: Array,
        required: false
    },
    stock: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
        default: 'admin'
    }
}, { timestamps: true })

// schema.plugin(mongoosePaginate)

const productModel = mongoose.model(collection, schema)

export default productModel
import mongoose from 'mongoose'

const collection = "Users"

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    // age: Number,
    // birthdate: Date,
    active: {
        type: Boolean,
        default: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Carts'
    }
})

const userModel = mongoose.model(collection, schema)

export default userModel
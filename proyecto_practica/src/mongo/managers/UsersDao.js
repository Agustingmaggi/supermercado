import userModel from "../models/userModel.js";

export default class UsersDao {

    getUsers = () => {
        return userModel.find()
    }

    getUserBy = (param) => {
        return userModel.findOne(param)
    }

    createUser = (user) => {
        return userModel.create(user)
    }

    updateUser = (id, user) => {
        return userModel.updateOne({ _id: id }, { $set: user }) //el set es un operador de update de mongo. Funciona sin tener que reemplazar el doc entero
    }

    deleteUser = (id) => {
        return userModel.deleteOne({ _id: id })
    }
}
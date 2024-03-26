import cartRepository from "../services/repositories/CartsRepository.js"
import userRepository from "../services/repositories/UsersRepository.js"
import { createHash, validatePassword } from '../utils.js'
import jwt from "jsonwebtoken"

const getUsers = async (req, res) => {
    const users = await userRepository.getUsers()
    res.send(users)
}
const register = async (req, res) => {
    res.clearCookie('cart')
    res.send({ status: 'success', payload: req.user })
}

const getUserBy = async (req, res) => {
    const user = await userRepository.getUserBy()
    res.send({ user })
}

// const login = async (req, res) => {
//     req.session.user = req.user
//     res.clearCookie('cart')
//     res.send({ status: "success", message: 'Logged in' })
// }

const logout = async (req, res) => {
    req.session.destroy(error => {
        if (error) {
            console.log(error)
            return res.redirect('/')
        } else {
            res.redirect('/')
        }
    })
}

//login de clase 11

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" })
    const user = await userRepository.getUserBy({ email })
    if (!user) return res.status(400).send({ status: "error", error: "Incorrect Credentials" })
    //Ya que existe el usuario, ahora debo comparar las contraseñas
    const isValidPassword = await validatePassword(password, user.password);
    if (!isValidPassword) return res.status(400).send({ status: "error", error: "Incorrect Credentials" })
    //Si se logueó bien, AHORA LE CREO UN TOKEN
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role, name: user.firstName, cart: user.cart }, 'secretjwt', { expiresIn: '1h' });
    console.log(token);
    res.clearCookie('cart')
    res.send({ status: "success", token })
}

// const loginClase12 = async (req, res) => {
//     // console.log(req.user)
//     const tokenizedUser = {
//         name: `${req.user.firstName} ${req.user.lastName}`,
//         id: req.user._id,
//         role: req.user.role,
//         cart: req.user.cart
//     }
//     // console.log(req.cookies)
//     const token = jwt.sign(tokenizedUser, 'jwtSecret', { expiresIn: "1d" });
//     res.clearCookie('cart')
//     res.cookie('authCookie', token, { httpOnly: true }).send({ status: "success", message: "Logged in" })
// }

const profileInfo = async (req, res) => {
    const user = req.user
    const cartId = req.user.cart
    const carrito = await cartRepository.getCart({ _id: cartId })
    // console.log(carrito)
    res.send({ user, carrito })
}

export default { getUsers, register, getUserBy, login, logout, profileInfo }
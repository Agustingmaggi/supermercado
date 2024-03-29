import cartRepository from "../services/repositories/CartsRepository.js";
import productsRepository from "../services/repositories/ProductsRepository.js";


const home = async (req, res) => {
    const products = await productsRepository.getProducts().lean()

    res.send({ products })
}

const register = async (req, res) => {
    res.render('register')
}

// const login = async (req, res) => {
//     res.render('loginPassport')
// }

const login = async (req, res) => {
    res.render('login', { user: req.user })
}

const profile = async (req, res) => {
    console.log(req.session)
    if (!req.session.user) {
        return res.redirect('/login')
    }
    res.render('profile', { usuario: req.session.user })
}

const profileJWT = async (req, res) => {
    res.render('profileJWT');
}

const cookies = async (req, res) => {
    res.cookie('cookie de prueba!', 'valor de la cookie d prueba', { maxAge: 40000 })
    res.cookie('segunda cookie', 'valor de la segunda cookie')
    res.render('cookies')
}

const carrito = async (req, res) => {
    // console.log("desde views controller, carrito", req.user)
    // console.log("hola!")
    const cartId = req.user.cart
    const cart = await cartRepository.getCart(cartId).populate('products.product').lean()
    const products = cart.products
    res.send({ products: products })
    // console.log(cart)
}


export default { home, register, login, profile, profileJWT, cookies, carrito }
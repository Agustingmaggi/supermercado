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


export default { home, register, login, profile, profileJWT, cookies }
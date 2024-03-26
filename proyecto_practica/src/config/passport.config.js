import passport from "passport"
import local from 'passport-local'
import { createHash, validatePassword } from '../utils.js'
import userRepository from "../services/repositories/UsersRepository.js"
import { Strategy, ExtractJwt } from 'passport-jwt'
import { cookieExtractor } from '../utils.js';
import cartRepository from '../services/repositories/CartsRepository.js'

const localStrategy = local.Strategy

const initializeStrategies = () => {

    passport.use('register', new localStrategy({ passReqToCallback: true, usernameField: 'email', session: false }, async (req, email, password, done) => {
        const { firstName, lastName } = req.body
        // console.log(req.body)
        if (!email || !password) {
            return done(null, false, { message: 'Incomplete Values' })
        }
        const hashedPassword = await createHash(password)
        const nuevoUsuario = { firstName, lastName, email, password: hashedPassword }


        let cart = await cartRepository.createCart()
        nuevoUsuario.cart = cart._id

        const result = await userRepository.createUser(nuevoUsuario)
        done(null, result)
    }))

    passport.use('login', new localStrategy({ usernameField: 'email', session: false }, async (email, password, done) => {
        if (!email || !password) return done(null, false, { message: 'Incomplete Values' })
        const user = await userRepository.getUserBy({ email })
        if (!user) return done(null, false, { message: 'Incorrect Credentials' })
        const isValidPassport = await validatePassword(password, user.password)
        if (!isValidPassport) return done(null, false, { message: 'Incorrect Credentials' })
        done(null, user)
    }))

    passport.use('jwt', new Strategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: 'jwtSecret'
    }, async (payload, done) => {
        return done(null, payload)
    }))

    passport.serializeUser((user, done) => {
        return done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await userRepository.getUserBy({ _id: id })
        done(null, user)
    })
}

export default initializeStrategies
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import Handlebars from 'express-handlebars'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import cors from "cors"

import ProductsRouter from './routes/Products.router.js'
import CartsRouter from './routes/Carts.router.js'
import ViewsRouter from './routes/views.router.js'
import SessionRouter from './routes/Session.router.js'
import initializeStrategies from './config/passport.config.js'

import { __dirname } from './utils.js'

const app = express()
app.use(cors())

const port = process.env.port || 1234

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

const connection = mongoose.connect("mongodb+srv://agustingmaggi:Agustin011235@cluster0.ewlnbwy.mongodb.net/proyecto_practica?retryWrites=true&w=majority")

app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://agustingmaggi:Agustin011235@cluster0.ewlnbwy.mongodb.net/proyecto_practica?retryWrites=true&w=majority",
        ttl: 3600
    }),
    secret: "secreto!",
    resave: false,
    saveUninitialized: false
}))

initializeStrategies()
app.use(passport.initialize())

app.engine('handlebars', Handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')


app.use('/', ViewsRouter)
app.use('/api/sessions', SessionRouter)
app.use('/productos', ProductsRouter)
app.use('/carts', CartsRouter)
import { Router } from "express"
import BaseRouter from './BaseRouter.js';
import UsersController from '../controllers/UsersController.js';
import passport from 'passport'
import passportCall from '../middlewares/passportCall.js';
import { validateJWT } from '../middlewares/jwtExtractor.js';

const router = Router()

// class SessionRouter extends BaseRouter {
//     init() {
router.get('/logout', UsersController.logout)
router.get('/user', validateJWT, UsersController.profileInfo)
router.post('/register', passportCall('register'), UsersController.register)
// router.post('/login', passport.authenticate('login'), UsersController.login) //esto es passport con express session o sea con cookie connect.sid
router.post('/login', passportCall('login'), UsersController.login) //Esto envia el token jwt por body 
//ojo que la ruta del front es /loginjwt y es la misma para el endpoint /loginJWT como para /loginClase12. Solo hay que cambiar el fetch del js de public 'loginJWT para mandar el token por body o por cookies
// router.post('/loginClase12', passportCall('login'), UsersController.loginClase12) //Esto envia el token jwt por cookies

//     }
// }

export default router
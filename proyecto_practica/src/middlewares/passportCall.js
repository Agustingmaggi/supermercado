import passport from "passport"

const passportCall = (strategy, options = {}) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, function (error, user, info) {
            console.log(user)
            if (error) return next(error);
            // if (!options.strategyType) {
            //     return res.sendInternalError('strategyType not defined')
            // }
            if (!user) {
                switch (options.strategyType) {
                    case 'LOCALS': {
                        return res.status(401).send({ status: "error", error: info.message ? info.message : info.toString() })
                    }
                    case 'JWT': {
                        console.log("estamos en JWT en passport call, no hay user")
                        req.user = null;
                        return next();
                    }
                }
            }
            //Si sí me llegó el user
            req.user = user;
            next();
        })(req, res, next);
    }
}

export default passportCall
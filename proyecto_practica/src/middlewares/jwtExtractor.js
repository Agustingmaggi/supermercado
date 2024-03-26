import jwt from 'jsonwebtoken';

export const validateJWT = (req, res, next) => {
    // Bearer ASDPOAKSÑLDKZÑXLCKASDO

    //Extraer el header
    console.log("a ver si llega")
    const authHeader = req.headers.authorization;

    console.log(req.headers)

    if (!authHeader) return res.status(401).send({ status: "error", error: "Not logged" });
    //Si ya me lo envió, tengo de DESCIFRAR EL TOKEN
    const token = authHeader.split(' ')[1];
    console.log(token)
    //Pero el token será válido?
    try {
        const userInfo = jwt.verify(token, 'secretjwt');
        req.user = userInfo; //¡ESTAMOS RECREANDO LA FUNCIONALIDAD DE PASSPORT CON SESSION!
        console.log("a ver acaaa")
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ status: "error", error: "TOKEN error" })
    }
}
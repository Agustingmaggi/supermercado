import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt from 'bcrypt'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const createHash = async (password) => {
    const salts = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salts)
}

const validatePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}

const cookieExtractor = (req) => {
    let token = null;
    // console.log(req.cookies)
    if (req && req.cookies) {
        token = req.cookies['authCookie']
    }
    // console.log(token)
    return token;
}

export { __dirname, createHash, validatePassword, cookieExtractor };

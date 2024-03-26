import cartRepository from "../services/repositories/CartsRepository.js";

const getCart = async (req, res) => {
    const { cid } = req.params
    const result = await cartRepository.getCart({ _id: cid })
    res.send({ status: "success", payload: result })
}

const createCart = async (req, res) => {
    const result = await cartRepository.createCart()
    res.send({ status: "success", payload: result._id })
}

export default { getCart, createCart }
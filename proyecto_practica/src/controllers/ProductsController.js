import productsRepository from '../services/repositories/ProductsRepository.js'

const getProducts = async (req, res) => {
    const products = await productsRepository.getProducts()
    res.send(products)
}
const getProduct = async (req, res) => {
    const pid = req.params.pid
    const product = await productsRepository.getProduct(pid)
    res.send(product)
}

const createProducts = async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    const { title, price } = req.body
    const nuevoProd = { title, price }
    const images = req.files.map(file => `${req.protocol}://${req.hostname}:${process.env.PORT || 1234}/img/${file.filename}`);
    nuevoProd.images = images

    const result = await productsRepository.createProduct(nuevoProd)
    res.send(result)
}

const updateProduct = async (req, res) => {
    const pid = req.params.pid
    const { title, price, images } = req.body
    const prodActualizado = { title, price, images }
    await productsRepository.updateProduct(pid, prodActualizado)
    res.send({ status: "success", message: "Producto actualizado con exito!" })
}

const deleteProduct = async (req, res) => {
    const { pid } = req.params
    await productsRepository.deleteProduct(pid)
    res.send({ status: "success", message: "prod eliminado con exito" })
}

export default { getProducts, getProduct, createProducts, updateProduct, deleteProduct }
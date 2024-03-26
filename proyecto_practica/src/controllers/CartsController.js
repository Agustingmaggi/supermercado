import cartRepository from "../services/repositories/CartsRepository.js";
import productsRepository from "../services/repositories/ProductsRepository.js";

const getCart = async (req, res) => {
    const { cid } = req.params
    const result = await cartRepository.getCart({ _id: cid })
    res.send({ status: "success", payload: result })
}

const createCart = async (req, res) => {
    const result = await cartRepository.createCart()
    res.send({ status: "success", payload: result._id })
}

const updateCart = async (req, res) => {

    console.log(req.body)
    const productId = req.body.productId
    const cartId = req.body.userCart
    const userId = req.body.userId
    const cart = await cartRepository.getCart({ _id: cartId });

    // console.log(cart)
    if (!userId) return res.status(400).send({ status: 'error', error: 'Tenes que logearte para agregar al carrito' })
    if (!cart) return res.status(400).send({ status: "error", error: "Cart doesn't exist" });

    const product = await productsRepository.getProduct({ _id: productId });

    if (!product) return res.status(400).send({ status: "error", error: "Product doesn't exist" });

    let productExistInCart = cart.products.find(item => item.product.toString() === productId);
    if (productExistInCart) {
        // Si el producto ya existe en el carrito, aumenta la cantidad en uno
        productExistInCart.quantity += 1;
    } else {
        // Si el producto no existe en el carrito, agrégalo con cantidad 1
        cart.products.push({
            product: productId,
            quantity: 1,
            added: new Date().toISOString()
        });
    }

    await cartRepository.updateCart(cartId, { products: cart.products });
    res.send({ status: "success", message: "Product Added" });
}

export default { getCart, createCart, updateCart }
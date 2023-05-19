function cartItems(req,res,next){
    const carrito = req.session.item

    res.locals.carrito = carrito
    next()
}

module.exports = cartItems
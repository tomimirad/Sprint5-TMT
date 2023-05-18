function cartItems(req,res,next){
    const carrito = []
    console.log('Hola',res.locals)
        if (res.locals.item) {
            carrito.push(res.locals.item)
        }
        res.locals.carrito = carrito
    next()
}

module.exports = cartItems
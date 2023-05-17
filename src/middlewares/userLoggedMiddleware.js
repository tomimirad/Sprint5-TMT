function userLogged(req,res,next){
    res.locals.logueado = false

    if (req.session && req.session.usuario) {
        res.locals.logueado = true
        res.locals.usuarioLogueado = req.session.usuario
    }

    next();
}

module.exports = userLogged
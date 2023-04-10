const usersModel = require("../model/User")
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator')


const usersController = {
    login: (req, res) => {
        if (!req.session.usuario) {
            res.render("login", {  });
        } else {
            res.send('Estas Logueado, no puedes entrar')
        }
    },
    procesoLogin: (req, res) =>{
        let errores = validationResult(req)
        if(!errores.isEmpty()){
            res.render("login", { errores:errores.mapped(), old: req.body });
        } else {
            let usuarioLogin = usersModel.buscarXtodo("email",req.body.email);
            if(!usuarioLogin){
                res.render("login",{ error: {msg:'Este usuario no existe'}})
            }else if(bcrypt.compareSync(req.body.contra,usuarioLogin.contrasena)){
                req.session.usuario = usuarioLogin;
                res.redirect("/profile")
            } else {
                res.render('login', { error: {msg:'La contraseña es incorrecta'}})
            }
        }
       
    },
    register: (req, res) => {
        if (!req.session.usuario) {
            res.render("register", {  });
        } else {
            res.send('Estas Logueado, no puedes entrar')
        }
    },
    procesoRegister: (req, res) =>{
        let errores = validationResult(req)

        if(!errores.isEmpty()){
            res.render("register", { errores:errores.mapped(), old: req.body });
        } else {
            const UsuarioARegistrar = usersModel.buscarXtodo('email', req.body.email);
            if( UsuarioARegistrar == undefined){
                const user = {
                    ...req.body,
                    contrasena:bcrypt.hashSync(req.body.contrasena,10),
                    img:req.file ?  req.file.filename  : 'imgDefault.png'
                }
                usersModel.crear(user)
                req.session.usuario =  usersModel.buscarXtodo('email', req.body.email)
                res.redirect('/profile')
            } else {
                res.render("register", { error: {msg:'Este usuario ya existe'}});
            }
            
        }

    },
    profile:(req, res) => {
        if(req.session.usuario){
            let usuario = usersModel.buscarPK(req.session.usuario.id);
            res.render('user', { usuario : usuario })
        } else {
            res.send('No tiene permitido ingresar')
        }
    }
}

module.exports = usersController
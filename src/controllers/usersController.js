const usersModel = require("../model/User")
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator')


const usersController = {
    login: (req, res) => {
        res.render("login", {  });
    },
    procesoLogin: (req, res) =>{
        let errores = validationResult(req)
        console.log(errores)
        if(!errores.isEmpty()){
            res.render("login", { errores:errores.mapped(), old: req.body });
        } else {
            let usuarioLogin = usersModel.buscarXtodo("email",req.body.email);
            if(!usuarioLogin){
                res.render("login",{error:"el usuario no existe"})
            }else{
                res.redirect("/profile")
            }
        }
       
    },
    register: (req, res) => {
        res.render("register", {  });
    },
    procesoRegister: (req, res) =>{
        let errores = validationResult(req)

        if(!errores.isEmpty()){
            res.render("register", { errores:errores.mapped(), old: req.body });
        } else {
            let UsuarioARegistrar = usersModel.buscarXtodo('email', req.body.email);
            if( UsuarioARegistrar == undefined){
                const user = {
                    ...req.body,
                    contraseña:bcrypt.hashSync(req.body.contraseña,10),
                    img:req.file ?  req.file.filename  : 'imgDefault.png'
                }
                usersModel.crear(user)
                res.redirect('/profile')
            } else {
                res.render("register", { error: {msg:'Este usuario ya existe'}});
            }
            
        }

    },
    profile:(req, res) => {
        let usuarios = usersModel.buscarPK(5);
        res.render('user', { usuarios : usuarios })
    }
}

module.exports = usersController
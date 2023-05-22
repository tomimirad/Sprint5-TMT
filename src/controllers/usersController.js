
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator')
const fs  = require('fs')
const path = require('path');
const db = require("../database/models");
const { log } = require("console");
const Usuario = db.Usuario


const usersController = {
    login: (req, res) => {
        if (!req.session.usuario) {
            res.render("login", {  });
        } else {
            res.send('Estas Logueado, no puedes entrar')
        }
    },
    procesoLogin: async (req, res) =>{
        let errores = validationResult(req)
        if(!errores.isEmpty()){
            res.render("login", { errores:errores.mapped(), old: req.body });
        } else {
            // let usuarioLogin = usersModel.buscarXtodo("email",req.body.email);
            let usuarioLogin = await Usuario.findOne({where:{email:req.body.email}});
            if(!usuarioLogin){
                res.render("login",{ error: {msg:'Este usuario no existe'}})
            }else if(bcrypt.compareSync(req.body.contra,usuarioLogin.contrasena)){
                req.session.usuario = usuarioLogin;
                res.locals.usuario = usuarioLogin
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
    procesoRegister: async (req, res) =>{
        let errores = validationResult(req)

        if(!errores.isEmpty()){
            res.render("register", { errores:errores.mapped(), old: req.body });
        } else {
            // const UsuarioARegistrar = usersModel.buscarXtodo('email', req.body.email);
            const UsuarioARegistrar = await Usuario.findOne({where:{email:req.body.email}});
            if( UsuarioARegistrar == undefined){
                await Usuario.create({
                        ...req.body,
                    contrasena:bcrypt.hashSync(req.body.contrasena,10),
                    img:req.file ?  req.file.filename  : 'imgDefault.png',
                    categoria: 'user'   
                })
                req.session.usuario = await Usuario.findOne({where:{email:req.body.email}})
                res.redirect("/profile")
                // req.session.usuario =  Usuario.findOne({where:{email:req.body.email}})
                // res.redirect('/profile')
            } else {
                res.render("register", { error: {msg:'Este usuario ya existe'}});
            }
            
        }
    },
    profile:(req, res) => {
        if(req.session.usuario){
            // let usuario = usersModel.buscarPK(req.session.usuario.id);
            let usuario = req.session.usuario;
            res.render('user', { usuario : usuario })
        } else {
            res.send('No tiene permitido ingresar')
        }
    },
    editprofile: async(req, res) => {
        try {
            await Usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contrasena:bcrypt.hashSync(req.body.contrasena,10),
                telefono: req.body.telefono,
            },{
                where:{usuario_id:req.params.id}
            }
            )
            req.session.usuario = await Usuario.findOne({where:{email:req.body.email}})
            res.redirect('/profile')
            
        } catch (error) {
            res.send(error)
        }
	},
    destroyprofile:(req,res) =>{
        Usuario.findByPk(req.params.id)
        .then((UsuarioAEliminar)=>{
            if (UsuarioAEliminar.img !== 'imgDefault.png') {
                fs.unlinkSync(path.resolve(__dirname, "../../public/images/usersProfile/" + UsuarioAEliminar.img));
            }
            Usuario.destroy({
                where:{usuario_id:req.params.id}
            })
            .then(()=>{
                req.session.destroy()
                res.redirect('/')
            })
        })
        .catch((e)=>{
            res.send(e)
        })
    },
    cerrarSesion: function(req, res){
        req.session.destroy()
        res.redirect('/')
    }
}
module.exports = usersController
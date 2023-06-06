const express = require('express');
const router = express.Router();
const {check} = require('express-validator')


const usersController = require ('../controllers/usersController')
const multerMiddleware = require('../multer/multer')
const uploadFile = multerMiddleware('images/usersProfile','user');

//* Validaciones de Registro y Login 


const validacionesRegistro = [
    check('nombre').notEmpty().withMessage('Ingrese un nombre').bail()
        .isLength({ min: 2, max: 20}).withMessage('Ingrese entre 2 y 20 carácteres'),
    check('apellido').notEmpty().withMessage('Ingrese un apellido').bail()
        .isLength({ min: 2, max: 20}).withMessage('Ingrese entre 2 y 20 carácteres'),
    check('telefono').notEmpty().withMessage('Ingrese un teléfono').bail()
        .isLength({ min: 9, max:15}).withMessage('Ingrese un número de teléfono entre 9 y 15 carácteres').bail().isInt().withMessage('Ingrese un número de teléfono válido'),
    check('email').notEmpty().withMessage('Ingrese un Email.').bail()
        .isEmail().withMessage('Ingrese un Email valido'),
    check('contrasena').notEmpty().withMessage('Ingrese una contraseña').bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('La contraseña debe tener minimo 8 carácteres, un minúscula, un mayúscula, un número y un símbolo'),
]

const validacionesLogin = [
    check('email').notEmpty().withMessage('Por favor ingrese un Email.').bail()
    .isEmail().withMessage('Ingrese un Email valido'),
    check('contra').notEmpty().withMessage('Ingrese una contraseña')
]



// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,path.join(__direname("../public/images/usersProfile")))
//     },
//     filename:(req,file,cb)=>{
//         console.log(file)
//         let newFile = "foto-" + Date.now() + path.extName(file.originalname);
//         cb(null,newFile)
//     }
// })

// const upload = multer({storage:storage})





router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/profile', usersController.profile)

router.get('/logout', usersController.cerrarSesion)

router.post('/login', validacionesLogin, usersController.procesoLogin)

router.post('/register', uploadFile.single('img'), validacionesRegistro, usersController.procesoRegister)

router.put('/profile/edit/:id', usersController.editprofile)

router.delete('/profile/delete/:id', usersController.destroyprofile)

module.exports = router;
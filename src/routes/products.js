
// ************ Require's ************
const express = require('express');
const router = express.Router();
const multerMiddleware = require('../multer/multer')
const uploadFile = multerMiddleware('images','product');
const {check} = require("express-validator")

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// validaciones de Creacion de productos
const validacionesCrear = [
    check('titulo').notEmpty().withMessage('Ingrese un titulo').bail()
    .isLength({ min: 2, max: 20}).withMessage('Ingrese entre 2 y 20 carácteres'),
    check('precio').notEmpty().withMessage('Ingrese un precio').bail().isFloat(),
    check('descripcion').notEmpty().withMessage('Ingrese una descripcion').bail(),
    check('descuento').notEmpty().withMessage('Ingrese un descuento.').bail().isInt(),
    check('cuotas').notEmpty().withMessage('Ingrese una cuota').bail().isInt(),
    check("subcategoria").notEmpty().withMessage("Elija una subcategoria")
]

/*** GET ALL PRODUCTS ***/ 
router.get('/productos', productsController.productList);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', uploadFile.single('img'),validacionesCrear,productsController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/  
router.put('/edit/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 

router.get('/filtrar/:id', productsController.filtrar)

router.post('/filtroTitulo', productsController.filtroTitulo)

router.get('/carrito/:id', productsController.carrito)

module.exports = router;

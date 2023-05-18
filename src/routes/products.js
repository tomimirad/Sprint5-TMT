// ************ Require's ************
const express = require('express');
const router = express.Router();
const multerMiddleware = require('../multer/multer')
const uploadFile = multerMiddleware('images','product');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/productos', productsController.productList);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', uploadFile.single('img'),productsController.store); 

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

// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
//router.get('/search', mainController.search); 


router.get('/producto/:productoId', mainController.producto);
router.get('/productcart', mainController.cart);
router.get('/productList', mainController.producList);
router.get('/create',mainController.create)

module.exports = router;

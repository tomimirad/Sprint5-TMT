
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models");
const sequelize = db.sequelize;


const Producto = db.Producto

const controller = {


	productList: (req, res) => {
		Producto.findAll()
		.then(productos=>{
			res.render("productList", { productos : productos, toThousand });
		})
    },
	detail: (req, res) => {
        const inSale = productModel.inSale('in-sale')
        let productos = productModel.readFile();
        let producto = productos.find(producto => producto.id == req.params.productoId);
        res.render("productDetail", { producto : producto , productos : productos, inSale, toThousand});
    },

	// Create - Form to create
	create: (req, res) => {
		// if (req.session.usuario) {
        //     res.render("create",{productos: productos})
        // } else {
        //     res.send('No tiene permitido acceder a crear producto')
        // }
		res.render('create')
	},


	// Create -  Method to store
	
	store: (req, res) => {
		
		Producto.create({
			titulo: req.body.titulo,
			precio: req.body.precio,
			descripcion: req.body.descripcion,
			img: req.file ?  req.file.filename  : 'notFound.png',
			descuento:req.body.descuento,
			cuotas: req.body.cuotas,
			subCategoria_id:req.body.subcategoria,
			sale: 'null'
		});
		
		console.log('cree un nuevo producto')
		res.redirect('/products/create')
	},

	update: (req, res) => {

		Producto.update({
			titulo: req.body.titulo,
			precio: req.body.precio,
			descripcion: req.body.descripcion,
			img: req.file ?  req.file.filename  : 'notFound.png',
			descuento:req.body.descuento,
			cuotas: req.body.cuotas,
			subCategoria_id:req.body.subcategoria,
			sale: 'null'
		},
		{
			where:{id:req.params.id}
		})

	},


    destroy: function(req,res){
       Producto.destroy({ where:{id:req.params.id}})
    }



};



module.exports = controller;
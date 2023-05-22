
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models");
const url = require('url');
const sequelize= require('sequelize');
const Op = sequelize.Op


const Producto = db.Producto
const controller = {
	carrito:(req,res)=>{
		Producto.findOne(
			{
				where:{producto_id: req.params.id}
			})
			.then((producto)=>{
				let Item = producto.dataValues
				if (!req.session.item) {
					req.session.item = [];
				}
				req.session.item.push(Item)
				res.redirect('/products/productos')
			})
			
		
	},
	filtrar: (req,res)=>{
		Producto.findAll(
			{
				where:{subCategoria_id: req.params.id
			},
			include:['subcategoria']}
		)
		.then(productos=>{
			res.render("productList", { productos : productos, toThousand })
		})
		.catch((e)=>{
			res.send(e)
		})
	},
	filtroTitulo:(req,res)=>{
		Producto.findAll({
			where:{
				titulo:{[Op.like]:'%' + req.body.search + '%'}
			}
		})
		.then((productos)=>{
			res.render('productList', {productos, toThousand})
		})
		.catch((e)=>{
			res.send(e)
		})

	},
	productList: (req, res) => {
		Producto.findAll()
		.then(productos=>{
			res.render("productList", { productos : productos, toThousand });
		})
    },
	detail: (req, res) => {
		Producto.findByPk(req.params.id)
		.then(function(producto){
			Producto.findAll(
				{
					where:{sale:'OnSale'}
				}
			)
			.then((productos=>{
				res.render('productDetail', {productos, producto, toThousand})
			}))
			.catch((e)=>{
				res.send(e)
			})
		})
		.catch(function(e){
			res.send(e)
		})
    },

	// Create - Form to create
	create: (req, res) => {
		if (req.session.usuario && (req.session.usuario.categoria == 'admin')) {
            res.render("create")
        } else {
            res.send('No tiene permitido acceder a crear producto')
        }
	
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
		
		res.redirect('/products/create')
	},

	update: (req, res) => {
		Producto.update({
			titulo: req.body.titulo,
			precio: req.body.precio,
			descripcion: req.body.descripcion,
			descuento:req.body.descuento,
			cuotas: req.body.cuotas,
			sale: 'null'
		},
		{
			where:{producto_id:req.params.id}
		})
		.then(function(){
			res.redirect('/products/productos')
		})
		
	},


    destroy: function(req,res){
    Producto.destroy({ where:{producto_id:req.params.id}})
	.then(function(){
			res.redirect('/products/productos')
		})
    }



};



module.exports = controller;
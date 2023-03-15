
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {


	detail: (req, res) => {
		const product = productModel.find(req.params.id)
		res.render('detail', {
			product, toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('create')
	},


	// Create -  Method to store
	
	store: (req, res) => {
		// Atrapo todos los campos del formulario
		const newProduct = {
			...req.body,
			img:req.file ?  req.file.filename  : 'notFound.png'
		}
		productModel.create(newProduct)
		console.log('cree un nuevo producto')
		res.redirect('create')
	},


	// Update - Form to edit


	edit: (req, res) => {
		console.log('ESTOY USANDO EL EDIT DEL GENERICO')
		let productToEdit = productModel.find(req.params.id)
		res.render('product-edit-form', { productToEdit })
	},

	// Update - Method to update



	update: (req, res) => {
		let productToEdit = productModel.find(req.params.id)

		productToEdit = {

			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,

		}

		productModel.update(productToEdit)
		res.redirect("/producto/"+req.params.id);

	},


    destroy: function(req,res){
        productModel.delete(req.params.id);
        res.redirect("/productList");
    }



};



module.exports = controller;

const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models");



const Producto = db.Producto


const mainController = {
    index : (req,res)=>{
        Producto.findAll(
			{
				where:{sale:'OnSale'}
			}
		)
		.then((productos=>{
			res.render("home", { productos : productos, toThousand });
		}))
		.catch((e)=>{
			res.send(e)
		})
    },
    cart: (req, res) => {
        res.render("productCart", {toThousand});
    }
}





module.exports = mainController;

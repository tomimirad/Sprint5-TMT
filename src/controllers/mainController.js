
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')

const toThousand = n => {
    const parts = n.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
}

const mainController = {
    index : (req,res)=>{
        const inSale = productModel.inSale('in-sale')
        res.render('home', {inSale})
    },
    producto: (req, res) => {
        const inSale = productModel.inSale('in-sale')
        let productos = productModel.readFile();
        let producto = productos.find(producto => producto.id == req.params.productoId);
        res.render("productDetail", { producto : producto , productos : productos, inSale, toThousand});
    },
    cart: (req, res) => {
        let productos = productModel.readFile();
        res.render("productCart", { productos : productos, toThousand});
    },
    login: (req, res) => {
        res.render("login", {  });
    },
    register: (req, res) => {
        res.render("register", {  });
    },
    productRecom: (req, res) => {
        let productos = productModel.readFile();
        res.render("productCart", { productos : productos, toThousand });
    },
    producList: (req, res) => {
        let productos = productModel.readFile();
        res.render("productList", { productos : productos, toThousand });
    },
    create:(req,res)=>{
        let productos = productModel.readFile();
        res.render("create",{productos: productos})
    }
}





module.exports = mainController;


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
    cart: (req, res) => {
        let productos = productModel.readFile();
        res.render("productCart", { productos : productos, toThousand});
    },
    productRecom: (req, res) => {
        let productos = productModel.readFile();
        res.render("productCart", { productos : productos, toThousand });
    }
}





module.exports = mainController;

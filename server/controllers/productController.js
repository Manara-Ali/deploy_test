const Product = require("../models/productModel");

exports.getAllProducts = (async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            results: products.length,
            status: "success",
            data: {
                products,
            }
        })
    } catch (error) {
        console.log(error);
    }
});
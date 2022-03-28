const router = require("express").Router();
const Product = require("../models/Product");

router.post("/", (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        categories: req.body.categories,
        price: req.body.price,
    });

    newProduct.save().then((product) => res.json(product));
});

router.get("/", (req, res) => {
    Product.find().then((product) => {
        if (!product) {
            res.status(404).json("Product not found");
        } else {
            res.json(product);
        }
    });
});

module.exports = router;
const { Product } = require("../models/product.model")

module.exports.createProduct = (req,res) =>{
    const {title, price , description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.getAll = (req,res) =>{
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

module.exports.getOne = (req,res) =>{
    Product.findById({_id:req.params.id})
    .then(products=>{
        res.json(products)
    })
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    console.log("in UpateProduct");
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}) 
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}
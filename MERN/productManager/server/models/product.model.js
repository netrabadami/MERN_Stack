const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title:{
        type: String,
        required:true,
        minlenght:[2,"Title must be atleast 2 characters"]
    },
    price:{
        type: Number,
        required: true,
        min:[0, "Price cannot be negative"]
    },

    description: {
        type: String,
        required: true,
        minlenght: [5,"Description must be atleast 5 characters"]
    }
}, {timestamp: true});

module.exports.Product = mongoose.model("Product", ProductSchema);
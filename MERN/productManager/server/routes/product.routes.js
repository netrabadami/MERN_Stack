const ProductController = require("../controllers/product.controller")

module.exports = (app) => {

    app.post("/api/product",ProductController.createProduct);
    app.get("/api/products",ProductController.getAll);
    app.get("/api/products/:id",ProductController.getOne);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}
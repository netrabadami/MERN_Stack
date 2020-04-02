const express = require("express");
const cors = require("cors");
const app = express();

require("./server/config/product.config")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./server/routes/product.routes")(app);

app.listen(8000,() =>{
    console.log("Server is started on port 8000");
})
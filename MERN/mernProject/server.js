const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
require("./server/routes/person.routes")(app);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
})
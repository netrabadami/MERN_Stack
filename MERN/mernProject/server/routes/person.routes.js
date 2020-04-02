const person = require("../controllers/person.controller")

module.exports = function(app){
    app.get("/api",person.index);
}

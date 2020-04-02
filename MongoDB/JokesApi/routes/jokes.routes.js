const Joke = require("../controllers/jokes.controller");

module.exports =app => {
    app.get("/api/jokes/",Joke.findAllJokes);
    app.get("/api/jokes/:id",Joke.findOne);
    app.post("/api/jokes/new",Joke.newJoke);
    app.put("/api/jokes/update/id",Joke.updateJoke);
    app.delete("/api/jokes/delete/:id",Joke.deleteJoke);
};
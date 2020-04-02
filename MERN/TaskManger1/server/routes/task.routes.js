const ToDos = require('../controllers/task.controller');

module.exports = app => {
    app.get("/api/todos", ToDos.getAll);
    app.post("/api/todos", ToDos.create);
    app.put("/api/todos/:_id", ToDos.update);
}
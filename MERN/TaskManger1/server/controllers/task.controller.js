const ToDo = require('../models/task.model');


    module.exports.getAll = (req, res) => {
        ToDo.find()
            .then(todos => res.json(todos))
            .catch(err => res.json(err));
    }
    module.exports.create = (req, res) => {
        const {task} = req.body;
        ToDo.create({task})
            .then(task => res.json(task))
            .catch(err => res.json(err));
    }
    module.exports.update = (req, res) => {
        ToDo.findByIdAndUpdate({_id: req.params._id}, req.body, {useFindAndModify: false})
            .then(task => res.json(task))
            .catch(err => res.json(err));
    }



const mongoose = require("mongoose");


    mongoose.connect("mongodb://localhost/taskdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then( () => console.log("Successfully connected to taskdb") )
        .catch( err => console.log("Something went wrong", err) );

const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required: true,
        minlength:[10,"Setup must be atleast 10 characters long"]
    },
    punchline: {
        type:String,
        required: true,
        minlength:[6,"Punchline must be atleast 6 characters long"]
    }
},
    {timestamps: { createdAt: true, updatedAt: false }}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
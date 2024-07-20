const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb://localhost:27017/")



const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo : todo
}


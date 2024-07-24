const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://rathinvj07:admin123@cluster123.om4xaso.mongodb.net/")



const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo : todo
}


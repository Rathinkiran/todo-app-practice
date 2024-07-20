const express = require("express");
const {createtodo,updatetodo} = require("./types")

const { todo } = require ("./db")


const app = express();

app.use(express.json());


app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            mssge: "You sent the wrong inputs"
        });
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.title,
        completed : false,
    })

    res.json({
        msge: "Todo created"
    })

})


app.get("/todos",async function(req,res){

    const todos = await todo.find();

    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            mssge: "You sent the wrong inputs"
        });
        return;
    }

    await todo.updateone({
        _id : req.body.id

    },{
        completed : true
    })

    res.json({
        mssge : "Todo marked as completed"
    })

})

app.listen(5000);
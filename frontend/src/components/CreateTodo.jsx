import { useState } from "react";

export function CreateTodo(){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input style={{padding:10,margin:10}} type="text" placeholder="title" onChange={function(e){
            const value  = e.target.value;
            setTitle(value);
        }}></input><br/>
        <input style={{padding:10,margin:10}} type="text" placeholder="descriptiom" onChange={function(e){
            const value1  = e.target.value; 
            setDescription(value1)}}></input><br/>

        <button onClick={()=>{
            fetch("http://localhost:5000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description,
                }),
                headers:{
                    "Content-type": "application/json" 
                }
            })
                .then(async function(res){
                    const json =  await res.json();
                    alert("Todo added")
                })
        }}>Add a todo</button>
    </div>
}

import express from "express"
import connection  from "./connection.js";
import env from "dotenv"
env.config()
const app=express();
app.get("/",(req,res)=>{
    res.send("hai team")
})
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    })
}).catch((error)=>{
    console.log(error);
    
})

const bodyParser = require("body-parser");
const express=require("express")
const app=express();
const PORT=3000;
app.use(bodyParser.json())
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("Hello World")
})
app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`);
})
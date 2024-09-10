// const bodyParser = require("body-parser");
const path=require("path")
const express=require("express")
const app=express();
const PORT=3000;
// app.use(bodyParser.json())
// app.use(express.static("template"))   // load index page without using get method
app.use(express.json())   //without using body parser
// app.get("/",(req,res)=>{
//     // console.log(req.body);
//     res.status(200).sendFile(path.join(__dirname,"template","index.html"))   //load index page   __dirname=>contains the path of the localhost
// })
// app.get("/about",(req,res)=>{
//     res.status(201).sendFile(path.join(__dirname,"template","pages","about.html"))   // load about page
// })
// app.get("/about",(req,res)=>{
//     res.status(202).sendFile(path.join(__dirname,"template","pages","contact.html"))   // load contact page
// })
// app.get("*",(req,res)=>{
//     res.status(400).sendFile(path.join(__dirname,"template","pages","error.html"))    // load error page
// })

app.get("/",Token,(req,res)=>{              //Token acts as a middleware
    console.log("Home");
    
    res.status(200).send("Hello World");
})


function Token(req,res,next){
    console.log("Middle Ware");
    next();         //next() -> allow to go to the home page
}
app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`);
})
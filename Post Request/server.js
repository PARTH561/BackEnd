const express = require("express");
const app = express();



app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})







app.listen(4670,()=>{
    console.log("server is running on port 4670");
})
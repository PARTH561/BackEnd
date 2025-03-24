const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
let userData = [];

app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})


app.post("/adduser",(req,res)=>{
    let { username,email,password} = req.body;
    console.log(username,email,password);

    let newUser = {
        name : username,
        email : email,
        password : password
    };
    userData.push(newUSer);
    res.send(userData);
});




app.listen(4670,()=>{
    console.log("server is running on port 4670");
});
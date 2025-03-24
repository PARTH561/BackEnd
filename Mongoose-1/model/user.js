const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique:true
    } 
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("User", userSchema);
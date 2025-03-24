const express = require("express");
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/class1')
  .then(() => console.log('Connected!'));


app.listen(2453,()=>{
    console.log("server is running on port 2453");
})
const { name } = require("ejs");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/simple_user");

const userSchema=mongoose.Schema({image:String,email:String,name:String});

module.exports=mongoose.model("User",userSchema)
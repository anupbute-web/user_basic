const router=require("express").Router();
const userModel=require("../models/user_model");
const { mongo } = require("mongoose");

route.post("/create",async(req,res)=>{
    let {name,email,image}=req.body
    await userModel.create({
        name:name,
        email:email,
        image:image
    })
    res.redirect("/")
})

module.exports=router
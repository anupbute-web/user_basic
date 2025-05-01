const router=require("express").Router();
const userModel=require("../models/user_model");
const { mongo } = require("mongoose");

app.post("/edit/:id",async(req,res)=>{
    let id=req.params.id;
    let {name,email,image}=req.body;
    let _id=await userModel.findOneAndUpdate({_id:id},{name:name,email:email,image:image});
    res.redirect("/read");
});

module.exports=router
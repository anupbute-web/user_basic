const router=require("express").Router();
const userModel=require("../models/user_model");
const { mongo } = require("mongoose");

router.get("/delete/:_id",async(req,res)=>{
    let ak=await userModel.findOneAndDelete({_id:req.params._id});
    res.redirect("/read");
})

module.exports=router
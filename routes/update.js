const router=require("express").Router();
const userModel=require("../models/user_model");
const { mongo } = require("mongoose");

router.get("/update/:_id",async(req,res)=>{
    let user=await userModel.findOne({_id:req.params._id});
    res.render("update",{user})
})

module.exports=router
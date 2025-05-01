const router=require("express").Router();
const userModel=require("../models/user_model");
const { mongo } = require("mongoose");

router.get("/read",async(req,res)=>{
    let users=await userModel.find({});
    res.render("read",{users});
})

module.exports=router
const express=require("express");
const path=require("path")
const app=express();
const userModel=require("./models/user_model");
const { mongo } = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/read",async(req,res)=>{
    let users=await userModel.find({});
    res.render("read",{users});
})

app.get("/ak",async(req,res)=>{
    let ak=await userModel.find({});
    res.send(ak);
})

app.get("/update/:_id",async(req,res)=>{
    let user=await userModel.findOne({_id:req.params._id});
    res.render("update",{user})
})

app.post("/edit/:id",async(req,res)=>{
    let id=req.params.id;
    let {name,email,image}=req.body;
    let _id=await userModel.findOneAndUpdate({_id:id},{name:name,email:email,image:image});
    res.redirect("/read");
});
 
app.get("/delete/:_id",async(req,res)=>{
    let ak=await userModel.findOneAndDelete({_id:req.params._id});
    res.redirect("/read");
})

app.post("/create",async(req,res)=>{
    let {name,email,image}=req.body
    await userModel.create({
        name:name,
        email:email,
        image:image
    })
    res.redirect("/")
})

app.listen(4040);


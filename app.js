const express=require("express");
const path=require("path")
const app=express();
const userModel=require("./models/user_model")

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
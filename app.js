const express=require("express");
const path=require("path")
const app=express();
const userModel=require("./models/user_model");
const { mongo } = require("mongoose");
let createUser=require("./routes/create");
let updateUser=require("./routes/update");
let editUser=require("./routes/edit");
let deleteUser=require("./routes/delete");
let readUser=require("./routes/read");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index");
});

app.use("/create",createUser);
app.use("/delete",deleteUser);
app.use("/read",readUser);
app.use("/edit",editUser);
app.use("/update",updateUser);


app.listen(4040);



https://github.com/anupbute-web
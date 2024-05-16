const express=require("express");
const app=express();

const port=8080;
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
})

app.get("/home",(req,res)=>{
    res.render("form.ejs")
})
app.post("/result",(req,res)=>{
    let {username,email}=req.body;
    res.send(`username name is ${username} & Email is ${email}`)
})

let fruits=["apple","banana","orange"]

app.get("/",(req,res)=>{
    res.render("fruits.ejs",{fruits})

})

app.post("/addFruit",(req,res)=>{
    if(req.body.fruit!=''){
        fruits.push(req.body.fruit);
    }
    res.redirect("/");
})



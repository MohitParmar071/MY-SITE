const express = require("express");
const app = express();
const path  = require('path');
const port  = 3000;
const ejsMate = require("ejs-mate");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views/Templets"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate)


app.get("/",(req,res)=>{
  res.render("portfolio")
});

app.get("/projects",(req,res)=>{
  res.render("projects")
});


app.get('/home',(req,res)=>{
    res.render('index');    
});

app.get('/about',(req,res)=>{
    res.render('about');    
});

app.get('/weather',(req,res)=>{
    res.render('weather');    
});

app.get("/Spotify",(req,res)=>{
  res.render("Spotify");
})

app.listen(port,()=>{
  console.log(`App are Loaded in ${port} Port Number`);
})
//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const port=3000;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["buy food","cook food", "eat food"];
let workItems=["do homework", "learn web dev"];

app.get('/',function(req,res){
  // res.sendFile(__dirname+"/index.html");
  let date=new Date();
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let title="It's "+date.toLocaleDateString("en-US", options)+"!";

  res.render("list", {
    title:title,
    items:items
  });
});

app.get("/work", function(req,res){
  res.render("list", {title: "Work List", items:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/",function(req,res){
  console.log(req.body.list);
  if(req.body.list=="Work List"){
    workItems.push(req.body.newItem);
    res.redirect("/work");
  }else{
    items.push(req.body.newItem);
    res.redirect("/");
  }
});




app.listen(port,function(){
  console.log("Server listening on port "+port);
});

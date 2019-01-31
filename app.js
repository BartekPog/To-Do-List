//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const port=3000;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["buy food","cook food", "eat food"];

app.get('/',function(req,res){
  // res.sendFile(__dirname+"/index.html");
  let date=new Date();

  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let dayString=date.toLocaleDateString("en-US", options);

  res.render("list", {
    day:dayString,
    items:items
  });
});
app.post("/",function(req,res){
  items.push(req.body.newItem);
  res.redirect("/");
});


app.listen(port,function(){
  console.log("Server listening on port "+port);
});

//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const port=3000;
app.set('view engine','ejs');

app.get('/',function(req,res){
  // res.sendFile(__dirname+"/index.html");
  let dzienTyg=(new Date()).getDay();
  let strDzien="";

  switch (dzienTyg) {
    case 0:strDzien="niedziela";  break;
    case 1:strDzien="poniedziałek";  break;
    case 2:strDzien="wtorek";  break;
    case 3:strDzien="środa";  break;
    case 4:strDzien="czwartek";  break;
    case 5:strDzien="piątek";  break;
    case 6:strDzien="sobota"; break;
    default: strDzien="nowy dzień";
  }

  res.render("list", {dzien:strDzien});
});


app.listen(port,function(){
  console.log("Server listening on port "+port);
});

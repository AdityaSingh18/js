
var express = require('express');
const path = require('path');
var app = express();
var PORT = 3000;
  
//with middleware
app.use('/', function(req, res, next){
    res.status(200).json({id:100})
   next();
});
  
app.get('/', function(req, res){
    console.log("Home Page!")
    res.send();
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
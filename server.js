var express = require('express');
var app = express();
var Bear = require('./models/bear');


var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/fullstack-bears");

app.get('/api/bears', function(req, res){
  res.json({ message: "You found the bears route!" });
});

app.listen(3000, function(){
  console.log("lets get 👾 👾 👾 👾 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 👾 👾 👾 👾 up on port 3000");
});

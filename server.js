var express = require('express');
var app = express();
var Bear = require('./models/bear');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/fullstack-bears");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/bears', function(req, res){
  Bear.find(function(err, data) {
    if(err){
      console.log(err, "Error finding all bearers");
    } else {
      res.json(data);
    }
  });
});

app.post('/api/bears', function(req, res) {

  //make new bear using mongoose schema
  var bear = new Bear({
    age:      req.body.age,
    species:  req.body.species,
    name:     req.body.name,
    weight:   req.body.weight ,
    location: req.body.location,
    attitude: req.body.attitude
  });

  // save bear with node err style callback
  bear.save(function(err, bearData) {
    if(err){
      console.log(err, "Error with your bearer");
    } else {
      res.json(bearData);
    }
  });

});


app.listen(3000, function(){
  console.log("lets get 👾 👾 👾 👾 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 👾 👾 👾 👾 up on port 3000");
});

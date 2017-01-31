var express = require('express');
var app = express();
var Bear = require('./models/bear');
var bodyParser = require('body-parser');
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/fullstack-bears");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var date = moment();
  res.render('index', {name: "Carl", date: date.format("MMM Do YYYY"),
                      time: date.format("hh:mm:ss A")});
});

app.get('/bears', function (req, res) {
  Bear.find(function(err, data) {
    if(err){
      console.log(err, "Error finding all bearers");
    } else {
      res.render('bears', {bears: data});
    }
  });
});

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

app.get('/api/bears/:bear_id', function(req, res) {
  Bear.findById( req.params.bear_id, function(err, bearData) {
    if(err){
      console.log(err, "Error finding one specific bear");
    } else {
      res.json(bearData);
    }
  });
});

app.put('/api/bears/:bear_id', function(req, res) {
  Bear.findById( req.params.bear_id, function(err, bear) {
    if(err){
      console.log(err)
    } else {
      bear.age = req.body.age ? req.body.age : bear.age;
      bear.species = req.body.species ? req.body.species : bear.species;
      bear.attitude = req.body.attitude ? req.body.attitude : bear.attitude;
      bear.color = req.body.color ? req.body.color : bear.color;
      bear.weight = req.body.weight ? req.body.weight : bear.weight;
      bear.location = req.body.location ? req.body.location : bear.location;
      bear.name = req.body.name ? req.body.name : bear.name;

      bear.save(function(e, updatedBear){
        if(e){
          console.log(e, "ERROR UPDATING BEAR");
        } else {
          res.json(updatedBear);
        }
      });
    }
  });
});

app.delete('/api/bears/:bear_id', function(req, res) {
  Bear.remove({ _id: req.params.bear_id }, function(err, b){
    if(err){
      console.log(err, "COULD NOT DELETE BEAR");
    } else {
      res.json({ message: "BEAR DELETED" });
    }
  });
});


app.listen(3000, function(){
  console.log("lets get 👾 👾 👾  🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 👾 👾 👾 up on port 3000");
});

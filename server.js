var express = require('express');
var app = express();
var Bear = require('./models/bear');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/fullstack-bears");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

var indexRoute = require('./routes/index.js');
var bearsRoute = require('./routes/bears.js');

app.get('/bears', function (req, res) {
  Bear.find(function(err, data) {
    if(err){
      console.log(err, "Error finding all bearers");
    } else {
      res.render('bears', {bears: data});
    }
  });
});

app.use('/', indexRoute);
app.use('/api', bearsRoute);

app.listen(3001, function(){
  console.log("lets get 👾 👾 👾  🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 🎮 🔥 👾 👾 👾 up on port 3000");
});

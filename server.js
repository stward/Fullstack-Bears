var express = require('express');
var app = express();

app.get('/api/greeting', function(req, res) {
  res.send("Happy Monday!");
});

app.get('/api/greeting/:name', function(req, res) {
  var name = req.params.name;
  res.send("Happy Monday " + name + "!");
});

app.get('/api/happy', function(req, res) {
  res.send("I Love Mondays!");
});

app.get('/api/sad', function(req, res) {
  res.send("Mondays are moderately tollerable.");
});

app.listen(3000, function(){
  console.log("Express application fired up on port 3000");
});

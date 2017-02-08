var express = require('express');
var router = new express.Router();
var moment = require('moment');

router.use(function(req, res, next) {
  console.log("running express router");
  next();
});

router.route('/').get(function(req, res) {
  var date = moment();
  res.render('index', {name: "Carl", date: date.format("MMM Do YYYY"),
                      time: date.format("hh:mm:ss A")});
});

module.exports = router;

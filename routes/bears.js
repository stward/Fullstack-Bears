var express = require('express');

var router = new express.Router();

var Bear = require('../models/bear');

router.use(function(req, res, next) {
  console.log("running express router");
  next();
});

router.route('/bears')
  .get(function(req, res) {
    Bear.find(function(err, data) {
      if(err){
        console.log(err, "Error finding all bearers");
      } else {
        res.json(data);
      }
    });
  })
  .post(function(req, res) {
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

router.route('/bears/:bear_id')
  .get(function(req, res) {
    Bear.findById( req.params.bear_id, function(err, bearData) {
      if(err){
        console.log(err, "Error finding one specific bear");
      } else {
        res.json(bearData);
      }
    })
  })
  .put(function(req, res) {
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
  })
  .delete(function(req, res) {
    Bear.remove({ _id: req.params.bear_id }, function(err, b){
      if(err){
        console.log(err, "COULD NOT DELETE BEAR");
      } else {
        res.json({ message: "BEAR DELETED" });
      }
    });
  });

module.exports = router;

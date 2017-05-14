var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

var Room = require('../models/room');

router.get('/', function(req, res, next) {

  Room.find({}, function(err, results) {
      if (err)
          res.send(err);
      res.render('index', { title: 'Express' , results});
  });
});

module.exports = router;

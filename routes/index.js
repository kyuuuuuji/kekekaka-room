var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URL);
mongoose.connect('mongodb://kekekaka-room:NUUUl1kmuIitFdIzZ4ALBhMwG29lwo5lUhCAsWQyhxkwEjRhiVGz2MfJ6h2JdyUZ8FqxybmV6zQLV5OGF6QI6A==@kekekaka-room.documents.azure.com:10255/?ssl=true');

var Room = require('../models/room');

router.get('/', function(req, res, next) {

  Room.find({}, function(err, results) {
      if (err)
          res.send(err);
      results = JSON.stringify(results);
      res.render('index', { title: 'Express' , results});
  });
});

module.exports = router;

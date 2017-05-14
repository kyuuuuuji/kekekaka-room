var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Room = new Schema({
    date : Date,
    temperature : Number,
    humidity : Number,
});

module.exports = mongoose.model('room', Room);

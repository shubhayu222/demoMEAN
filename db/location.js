var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    id: Number,
    city:String,
    start_date: Date,
    end_date: Date,
    price: String,
    status: String,
    color: String
});

module.exports = LocationSc = mongoose.model('location', locationSchema);

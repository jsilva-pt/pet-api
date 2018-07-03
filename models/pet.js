import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('Pet', petSchema);
module.exports = Model;

import mongoose from 'mongoose';

var ObjectId = mongoose.Schema.Types.ObjectId;

var petSchema = new mongoose.Schema({
  _id: {
    type: ObjectId
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  color: {
    type: [String],
    required: true
  }
});

export default mongoose.model('Pet', petSchema);

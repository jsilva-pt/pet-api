import mongoose from 'mongoose';

var petSchema = new mongoose.Schema({
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

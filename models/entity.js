import mongoose from 'mongoose';

var entitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('Entity', entitySchema);

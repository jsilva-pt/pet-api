import mongoose from 'mongoose';

export default {
  open () {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://127.0.0.1:27017/test');
  },
  close () {
    mongoose.connection.close();
  }
};
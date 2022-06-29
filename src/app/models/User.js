const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
  id: ObjectId,
  email: String,
  password: String,
  userName: String,
  age: { type: Number } ,   
  gender: { type: Number }
});

module.exports = mongoose.model('user',user);
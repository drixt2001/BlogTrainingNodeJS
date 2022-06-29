const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const chude = new Schema({
  id: ObjectId,
  name: String,
  mota: String,
  anh: String,
});

module.exports = mongoose.model('chude',chude);
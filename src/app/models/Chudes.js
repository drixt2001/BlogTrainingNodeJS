const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const chude = new Schema({
  id: ObjectId,
  slug: String,
});

module.exports = mongoose.model('chude',chude);
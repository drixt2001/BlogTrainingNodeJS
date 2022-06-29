const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Categories = new Schema({
  id: ObjectId,
  name: String,
  avatar: String,
  slug: String
});

module.exports = mongoose.model('Categories',Categories);
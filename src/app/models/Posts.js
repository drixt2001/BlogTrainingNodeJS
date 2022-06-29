const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
  id: ObjectId,
  email: String,
  category: String,
  title: String,
  description: String,
  content: String,
  status: String,
  avatar: String,
  
});

module.exports = mongoose.model('Post',Post);
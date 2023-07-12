const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  contenu: { type: String, required: true },
  tag: { type: String, required: true },
  source: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Article', articleSchema);
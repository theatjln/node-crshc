// Schemas - defines the structure of a data/document (properties & property types)
// Models - lets us communicate with database collections

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, {timestamps: true});

// blog model, models are capitalized and singularized
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
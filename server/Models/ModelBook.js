const mongoose = require('mongoose')

const BookScheme = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title : {
    type: 'String',
    required: true
  },
  author : {
    type: 'String',
    required: true
  },
  description : {
    type: 'String',
    required: true
  },
  status : {
    type: 'String',
    required: true
  },
  heroImage : {
    type: 'String',
    required: false
  },
  lastUpdated : {
    type: 'Date', 
    default: Date.now,
    required: false
  },
  alternativeNames : {
    type: 'Array',
    required: false
  },
  myComment : {
    type: 'String',
    required: false
  },
  tags : {
    type: 'Array',
    required: false
  },
  category : {
    type: 'Array',
    required: false
  },
  volumes : {
    type: 'Number',
    required: false
  },
  chapters : {
    type: 'Number',
    required: false
  },
  links : {
    type: 'Array',
    required: false
  }
},
{
  timestamps: true
})

const Book = mongoose.model('Book', BookScheme)

module.exports = Book
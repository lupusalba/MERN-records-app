const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userName : {
    type: 'String',
    required: [true, 'Please add a username'],
    unique: true
  },
  userEmail : {
    type: 'String',
    required: [true, 'Please add an Email'],
    unique: true
  },
  password : {
    type: 'String',
    required: [true, 'Please add a password']
  }
},
{
  timestamps: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User
const mongoose = require('mongoose')

const movieSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  img:{
    type:String,
    required:true
  },
  summary:{
    type:String,
    default: false
  }
})

module.exports = mongoose.model('Movie',movieSchema)
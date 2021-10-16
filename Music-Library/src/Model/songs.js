const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Song = new Schema({
  
  Songname: {
    type: String,
    unique:true
  },
  album:
  {
      type:String
  },
  artist: {
    type: String
  },
  location: {
      type: String
  }
},
{
    collection: 'songs'
});

module.exports = mongoose.model('songs', Song);
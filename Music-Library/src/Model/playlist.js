const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let playlist = new Schema({
  
playlistid: {
    type: String,
    unique:true
  },
  username:{
    type: String,
},

  songname:{
      type: String,
    }
  
},{
    collection: 'playlist'
});

module.exports = mongoose.model('playlist', playlsit);
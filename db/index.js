var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connection successful');
});

var photoSchema = mongoose.Schema({
  photo_id: Number,
  date: Date,
  url: String
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
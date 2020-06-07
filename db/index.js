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

var selectAll = function(callback) {
  Photo.find({}, function(err, photos) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, photos);
    }
  });
};

module.exports.selectAll = selectAll;
// module.exports = Photo;      // uncomment to seed db
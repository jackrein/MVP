const fs = require('fs');
const csv = require('csv-parser');
const Photo = require('./index');

const photos = [];

const insertPhotos = () => {
  fs.createReadStream('selfies.csv')
    .pipe(csv())
    .on('data', (row) => photos.push(row))
    .on('end', () => {
      Photo.insertMany(photos, (err, docs) => {
        console.log(err || photos.length + ' photos saved')
      })
    });
}

insertPhotos();
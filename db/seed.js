const fs = require('fs');
const csv = require('csv-parser');
const Photo = require('./index');

const photos = [];
const file = fs.createWriteStream('selfies.json', {flag: 'as'});

const insertPhotos = () => {
  fs.createReadStream('selfies.csv')
    .pipe(csv())
    .on('data', (row) => {
      photos.push(row);
      file.write(JSON.stringify(row, null, 2) + ',\n');
    })
    .on('end', () => {
      Photo.insertMany(photos, (err, docs) => {
        console.log(err || photos.length + ' photos saved')
      })
    });
}

insertPhotos();
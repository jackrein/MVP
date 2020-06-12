const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express();
const Photo = require('../db');

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.use(express.static('build'));

app.get('/photos', async (req, res) => {
  await Photo.find({ })
    .then(result => res.status(200).send(result));
});

// app.get('/search', async (req, res) => {
//   await Photo.find({ photo_id: req.query.query })
//     .then(result => console.log(result));
//       // res.status(200).send(result));
// });

app.listen(5000, () => console.log('Listening on port 5000'));
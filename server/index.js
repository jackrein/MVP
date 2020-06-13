const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express();
const Photo = require('../db');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.use(express.static('build'));

app.get('/photos', (req, res) => {
  Photo.find({ })
    .then(result => res.status(200).send(result));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
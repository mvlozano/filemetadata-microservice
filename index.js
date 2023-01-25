const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer')
const upload = multer({ dest: './files' });
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
//Enable requests from any domain
app.use(cors({ optionsSuccessStatus: 200 }));
//Serving static files
app.use(express.static('public'));


//Routing
//Returns index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//Returns uploaded file metadata (name, type and size)
app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  const file = req.file;
  res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  });
});

//Starts listening for requests
app.listen(PORT,  () => {
  console.log('Your app is listening on port:', PORT)
});

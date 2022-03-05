const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();app.use(cors());

// Serve static files
app.use(express.static(__dirname + '/dist/Quicko'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Quicko/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);

// Routes
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Globals
var port = 3003;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Listener
app.listen(port, function (req, res) {
    console.log('Listening on port:', port);
})
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const cors = require('cors');
const morgan = require('morgan');

app.use(express.static(__dirname + '/src'));

    // All expressJS Routes
    // var routes = require('./src/app/app.module.ts');

    // App configuration
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan('dev'));

    // Use as home directory (For Angular 2/4)
    app.use(express.static('public'));

server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
})
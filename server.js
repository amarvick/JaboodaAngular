const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Console Listening on Port 8080');
});

// server.listen(port, function() {
//     console.log("App running on port " + port);
// })

// PathLocationStrategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
})
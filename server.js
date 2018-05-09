const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname) + '/src');

app.listen(process.env.PORT || 3000, function() {
    console.log('Console Listening on Port 8080');
});

// PathLocationStrategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
})
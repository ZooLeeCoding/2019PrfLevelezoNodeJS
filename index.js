// Ez volt egy minimalista szerver Node.js-ben
/*const http = require("http");

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(5000);*/

// innen jon az Express

const express = require('express');

var app = express();

app.use('/', require('./routes'));
app.use('/proba', require('./routes'));

app.listen(5000, function() {
    console.log('the server is running');
});
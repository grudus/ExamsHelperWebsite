var express = require('express');

var app = express();

app.use(express.static(__dirname + '/src'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.get('/login', function (req, res) {
    res.sendFile('src/login.html', {root: __dirname})
});

app.all('*', function (req, res) {
    res.redirect('http://localhost:3000');
    // res.sendFile('src/index.html', {root: __dirname})
});

app.listen(3000, function () {
    console.log("listeing on localhost:3000");
});
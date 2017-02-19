var express = require('express');

var app = express();

app.use(express.static(__dirname + '/src'));
app.use('/lib', express.static(__dirname + '/node_modules'));

app.get('/login', function (req, res) {
    res.sendFile('src/auth.html', {root: __dirname})
});

app.get('/register', function (req, res) {
    res.sendFile('src/register.html', {root: __dirname})
});

app.all('*', function (req, res) {
    res.redirect('/');
});

app.listen(3000, function () {
    console.log("listeing on localhost:3000");
});
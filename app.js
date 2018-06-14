
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
 res.sendFile(__dirname +'/comercioelet/index.html');
});

app.listen(3000, function () {
  console.log('trabalho na porta 3000 - localhost:3000');
});

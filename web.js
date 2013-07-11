var express = require('express');

var app = express.createServer(express.logger());

//set up the variablt to call the file
var fs = require('fs');
//return the content of file as buffer
var content = fs.readFileSync('index.html');


app.get('/', function(request, response) {
  response.send(content.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

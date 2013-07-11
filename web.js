var express = require('express');

var app = express.createServer(express.logger());

var content = fs.readFileSync('index.html');
var buffer = new Buffer(30);
buffer.write(content, "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

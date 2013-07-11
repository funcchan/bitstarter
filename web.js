var express = require('express');

var app = express.createServer(express.logger());

var content = fs.readFileSync('index.html');
var buf = new Buffer(content.length);
for ( var i =0;i< content.length;i++){
 buf[i]=content.charCodeAt(i);
}
//buffer.write=(fs.readFileSync('index.html'), "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

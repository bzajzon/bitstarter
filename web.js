var express = require('express');

var app = express.createServer(express.logger());

var infile = "index.html"

var fs = require('fs');

var buffer = fs.readSync(infile);

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

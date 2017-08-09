var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('tiffanyprojectone.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);

console.log("Server is online! At http://localhost:8080");

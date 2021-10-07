var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>It works!</h1><p>puto el que lo lea xd");
}).listen(8080);

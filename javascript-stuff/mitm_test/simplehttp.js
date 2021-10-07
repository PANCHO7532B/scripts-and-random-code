const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html', 'Server':'p7com/1.1'});
    res.end("<head><title>200 OK</title><body><h1>200 OK</h1><p>The request performed was successful</p></body>");
}).listen(8080);
console.log("[INFO] - Server ready!");
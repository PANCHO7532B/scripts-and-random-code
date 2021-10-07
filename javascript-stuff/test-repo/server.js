const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    if(req.url == "/main/dists/stable/InRelease") {
        res.writeHead(200, {'Content-Type':'text/plain', 'Server':'guanacoWebserver/4.5a'});
        res.end(fs.readFileSync("./InRelease").toString());
    }
}).listen(8082);
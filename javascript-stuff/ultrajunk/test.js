const http = require('http');
const mainPort = 8080;
const serverInstance = http.createServer(function(req, res) {
    if(req) {
        console.log("aksdlaskd");
    }
}).listen(mainPort);
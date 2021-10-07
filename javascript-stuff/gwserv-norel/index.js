/*
* Basic Webserver for p7com.cf and subdomains sites
* (Almost when it will be finished the Guanaco Webserver development)
*/
console.log("Guanaco Webserver V0.1b");
var http = require('http');
var fs = require('fs');
var os = require('os');
var httpListen = 80;
http.createServer(function(req, res) {
    var ua;
    if(req) {
        if(!req.headers["user-agent"]) {
            ua = "-no user-agent detected-";
        } else {
            ua = req.headers["user-agent"];
        }
        if(req.method != "GET") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 503 - " + ua);
            var stage1 = fs.readFileSync("webroot/503.html").toString();
            var stage2 = stage1.replace("$ostype$", os.type());
            var stage3 = stage2.replace("$osrelease$", os.release());
            var stage4 = stage3.replace("$localaddr$", req.connection.localAddress);
            var stage5 = stage4.replace("$localport$", req.connection.localPort);
            res.writeHead(501, {'Content-Type':'text/html'});
            res.write(stage5);
            res.end();
            return;
        }
        if(req.url == "/" || req.url == "/index.html") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("webroot/index.html"));
            res.end();
            return;
        } else if(req.url == "/ssh_tun") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("webroot/ssh_tun.html"));
            res.end();
            return;
        } else if(req.url == "/squid") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("webroot/squid.html"));
            res.end();
            return;
        } else if(req.url == "/about") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("webroot/about.html"));
            res.end();
            return
        } else if(req.url == "/store") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("webroot/store.html"));
            res.end();
            return;
        } else if(req.url == "/account") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("webroot/account.html"));
            res.end();
            return;
        } else if(req.url == "/images/pancho7532.png") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'image/png'});
            res.write(fs.readFileSync("webroot/images/pancho7532.png"));
            res.end();
            return;
        } else if(req.url == "/favicon.ico") {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 200 - " + ua);
            res.writeHead(200, {'Content-Type':'image/x-icon'});
            res.write(fs.readFileSync("webroot/images/favicon.ico"));
            res.end();
            return;
        } else {
            console.log(req.connection.remoteAddress + ":" + req.connection.remotePort + " - [" + Date() + "] - " + req.method + " " + req.url + " 404 - " + ua);
            var stage1a = fs.readFileSync("webroot/404.html").toString();
            var stage2a = stage1a.replace("$ostype$", os.type());
            var stage3a = stage2a.replace("$osrelease$", os.release());
            var stage4a = stage3a.replace("$localaddr$", req.connection.localAddress);
            var stage5a = stage4a.replace("$localport$", req.connection.localPort);
            res.writeHead(404, {'Content-Type':'text/html'});
            res.write(stage5a);
            res.end();
        }
    }
}).listen(httpListen);
console.log("[INFO] - HTTP Server started!");
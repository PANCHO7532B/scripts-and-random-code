/*
* Choriador de payloads v1.0
* Copyright PANCHO7532 - P7COMUnications LLC (c) 2020 [PRIVATE AND CONFIDENTIAL SOFTWARE]
* Dedicado a Emanuel Miranda, por darme la idea de hacer esto :v
*/
const net = require('net');
const stream = require('stream');
const util = require('util');
var dhost = "127.0.0.1";
var dport = "8080";
var mainPort = "8888";
var outputFile = "outputFile.txt";
var gcwarn = true;
for(c = 0; c < process.argv.length; c++) {
    switch(process.argv[c]) {
        case "-dhost":
            dhost = process.argv[c + 1];
            break;
        case "-dport":
            dport = process.argv[c + 1];
            break;
        case "-mport":
            mainPort = process.argv[c + 1];
            break;
        case "-o":
            outputFile = process.argv[c + 1];
            break;
    }
}
function gcollector() {
    if(!global.gc && gcwarn) {
        console.log("[WARNING] - Garbage Collector isn't enabled! Memory leaks may occur.");
        gcwarn = false;
        return;
    } else if(global.gc) {
        global.gc();
        return;
    } else {
        return;
    }
}
setInterval(gcollector, 1000);
const server = net.createServer();
server.on('connection', function(socket) {
    console.log("[INFO] - Connection received from " + socket.remoteAddress + ":" + socket.remotePort);
    var conn = net.createConnection({host: dhost, port: dport});
    socket.xd = new stream.PassThrough();
    socket.socketDataEventCount = 0;
    socket.f1 = true;
    socket.on('data', function(data) {
        socket.socketDataEventCount++;
        //alright, attempt n°47 of making this shit work (yea, the number is real)
        if(socket.f1) {
            socket.xd.write(util.inspect(data.toString()));
        }
        if(socket.socketDataEventCount == 1) {
            socket.xd.write("\r\n");
        }
        if(socket.socketDataEventCount == 2) {
            socket.f1 = false;
            socket.xd.write("\r\n");
            socket.xd.end();
            socket.xd.unpipe(process.stdout);
        }
        if(socket.socketDataEventCount > 5) {
            socket.socketDataEventCount = 4;
        }
        socket.xd.pipe(process.stdout);
        //pipe sucks
        conn.write(data);
    });
    conn.on('data', function(data) {
        //pipe sucks x2
        socket.write(data);
    });
    socket.once('data', function(data) {
        /*
        * Nota para mas tarde, resolver que diferencia hay entre .on y .once
        */
    });
    socket.on('error', function(error) {
        console.log("[SOCKET] - read " + error + " from " + socket.remoteAddress + ":" + socket.remotePort);
        conn.destroy();
    });
    conn.on('error', function(error) {
        console.log("[REMOTE] - read " + error);
        socket.destroy();
    });
    socket.on('close', function() {
        console.log("[INFO] - Connection terminated for " + socket.remoteAddress + ":" + socket.remotePort);
        conn.destroy();
    });
});
server.listen(mainPort, function(){
    console.log("[INFO] - Server started on port: " + mainPort);
    console.log("[INFO] - Redirecting requests to: " + dhost + " at port " + dport);
});
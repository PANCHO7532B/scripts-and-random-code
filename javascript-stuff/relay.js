const net = require('net');
function parseargv(searchval) {
    for(c = 0; c < process.argv.length; c++){
        if(process.argv[c] == searchval) {
            return process.argv[c + 1];
        }
    }
    return "";
}
function gcollector() {
    if(!global.gc) {
        console.log("[WARNING] - Garbage Collector isn't enabled! Memory leaks may occur.");
        return;
    } else {
        global.gc();
    }
}
setInterval(gcollector, 1000);
const mainPort = parseargv("-port");
const dhost = parseargv("-dhost");
const dport = parseargv("-dport");

const server = net.createServer();

server.on('connection', function(socket){
    console.log("[INFO] - Connection received from: " + socket.remoteAddress + " in port " + socket.remotePort);
    socket.once('data', function(data){
        console.log("[SOCKET (" + socket.remoteAddress + ")] - Datastream received!");
        socket.write("HTTP/1.1 200 OK\r\nConnection: Keep-Alive\r\nContent-Type: application/octet-stream\r\nContent-Length: 1048576000000\r\n\r\n");
        console.log("[SOCKET (" + socket.remoteAddress + ")] - Creating bridge to " + dhost + ":" + dport);
        var conn = net.createConnection({host: dhost, port: dport});
        conn.on("ready", function(){
            console.log("[SOCKET (" + socket.remoteAddress + ")] - Bridge successful, streaming data...");
        });
        conn.on("close", function(){
            console.log("[SOCKET (" + socket.remoteAddress + ")] - Connection closed by bridge destination.");
        });
        socket.pipe(conn);
        conn.pipe(socket);
    });
    socket.on('error', function(error){
        console.log("[ERR] - " + error + " (" + socket.remoteAddress + " at port: " + socket.remotePort + ")");
    });
    socket.on('close', function(){
        console.log("[INFO] - Connection (" + socket.remoteAddress + ") closed by peer");
    });
});
server.listen(mainPort, function(){
    console.log("[INFO] - Server running on port: " + mainPort);
});
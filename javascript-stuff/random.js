const net = require("net");
const fs = require("fs");
net.createServer((socket) => {
    socket.write(fs.readFileSync("/dev/random"));
}).listen(8082);
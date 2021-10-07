const net = require("net");
setInterval(() => {
    let a = net.createConnection({host: "127.0.0.1", port: 8888});
    a.write("\r\n");
    a.on("data", function(data) {
        console.log("[INFO] data received");
        //console.log(data.toString());
    });
    a.on("error", function(err) {
        console.log("[ERR] " + err);
    });
}, 100);
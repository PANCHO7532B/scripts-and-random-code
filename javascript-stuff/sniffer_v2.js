const net = require('net');
const dns = require('dns');
const util = require('util');
const cproc = require('child_process');
const readline = require('readline');
var activePrompt = "";
var scriptIP = "";
var scriptPort = 0;
var showHelp = false;
for(let c = 2; c < process.argv.length; c++) {
    switch(process.argv[c]) {
        case "--host":
        case "-h":
            scriptIP = process.argv[c+1];
            c++;
            break;
        case "--port":
        case "-p":
            scriptPort = process.argv[c+1];
            c++;
            break;
        case "--help":
        case "/?":
            showHelp = true;
            c++;
            break;
        default:
            console.log("[ERROR] Unknown argument: " + process.argv);
            process.exit(1);
    }
}
if(showHelp) {
    var helpContent = [
        "Usage: node script.js [--args -a...]",
        "",
        "--host, -h\t\tHost to spoof",
        "--port, -p\t\tPort where the script will be listening",
        "--help, /?\t\tShow this help content"
    ];
    for(let c = 0; c < helpContent.length; c++) {
        console.log(helpContent[c]);
    }
    process.exit(0);
}
function spoofIP(ip) {
    try {
        cproc.execSync("iptables -t nat -A OUTPUT -d " + ip + " -j DNAT --to-destination 127.0.0.1", {stdio: ['ignore', 'pipe', 'ignore']});
    } catch(error) {
        throw("[ERROR] - Couldn't spoof IP!");
    }
    return;
}
function promptBridge(context) {
    promptxD(context);
    return;
}
function promptxD(context) {
    if(activePrompt) {
        activePrompt.close();
    }
    switch(context) {
        case "s1":
            activePrompt = readline.createInterface(process.stdin, process.stdout);
            activePrompt.question("Write IP to spoof (if any): ", function(input) {
                scriptIP = input;
                promptBridge("s2");
            });
            break;
        case "s2":
            activePrompt = readline.createInterface(process.stdin, process.stdout);
            activePrompt.question("Write the port where the script will be running: ", function(input) {
                if(input == "") {
                    input = 0;
                } else {
                    scriptPort = input;
                }
                actionStart();
            });
            break;
        default:
            console.log("lol");
            process.exit(1);
    }
}
//prompts
promptBridge("s1");
//checks
if(scriptIP == "") {
    console.log("[WARNING] No IP to spoof");
} else {
    try {
        spoofIP(scriptIP);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}
if(scriptPort = 0) {
    console.log("[ERROR] No port specified! Aborting...");
    process.exit(1);
}
const netListener = function(socket) {
    socket.incomingData = "";
    socket.parsedData = "";
    if(socket) {
        console.log("[INFO] - Connection received!");
    }
    socket.on('data', function(data) {
        socket.incomingData += util.inspect(data.toString());
        socket.parsedData = socket.incomingData.replace(/\n/g, "[lf]");
        socket.parsedData = socket.parsedData.replace(/\n/g, "[cr]");
        socket.parsedData = socket.parsedData.replace(/''/g, "[delay_split]");
        console.log(socket.incomingData);
        console.log(socket.parsedData);
    });
}
const netServer = net.createServer(netListener);
try {
    netServer.listen(scriptPort, function() {
        console.log("[INFO] - Server running at port: " + scriptPort);
    });
} catch(error) {
    console.log("[ERROR] Error binding server to port: " + scriptPort + ", error: " + error);
    process.exit(1);
}
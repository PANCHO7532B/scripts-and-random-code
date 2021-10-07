const sreq = require("sync-request");
console.log("Free GBs Personal Argentina v2\r\nCopyright (c) PANCHO7532 - 2021");
//console.log(process.argv[2]);
if(!process.argv[2]) {
    console.log("[ERROR] Missing phone number value");
    
    process.exit(0);
}
console.log("[INFO] Sending query...");
let number = process.argv[2];
let requestxd = sreq("POST", `https://api-ar.mytelco.io/`, {
    "headers": {
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; SM-711SJS Build/PRD16.42) MovistarAR/11.6.42",
        "Content-Type":"application/json; charset=utf-8",
    },
    "body": `{"jsonrpc":"2.0","id":6,"method":"AcquisitionAgent.1.validatePhone","params":{"phone":{"number":"${number}"}}}`
});
let response = JSON.parse(requestxd.body.toString());
if(!!response["error"]) {
    console.log(`[ERROR] ${response["error"]["message"]} (${response["error"]["code"]})`);
    //console.log(`[INFO] Query successful`);
} else if(!!response["result"] && response["result"]["isValid"]) {
    console.log(`[INFO] Query successful`);
} else {
    console.log(`[ERROR] Unknown status, response: ${requestxd.body.toString()}`);
}
process.exit(0);
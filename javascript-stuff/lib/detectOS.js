const fs = require('fs');
const os = require('os');
function parseInfo1(content) {
    var s1 = content.split("\r\n");
    var s2 = {};
    for(c = 0; c<s1.length; c++) {
        if(s1[c].indexOf("ID=") != -1) {
            s2["linuxdistro"] = s1[c].substring(0, 3);
        }
        if(s1[c].indexOf("VERSION_ID=") != -1) {
            s2["linuxvid"] = s1[c].substring(0, 11);
        }
    }
    var response = JSON.stringify(s2);
    return response;
}
module.exports.start = function() {
    if(os.platform() == "linux") {
        //do linux detection
        if(fs.existsSync("/etc/os_release")) {
            var s1 = parseInfo1(fs.readFileSync("/etc/os_release").toString());
            
        }
    } else if(os.platform() == "windows") {
        //do windows detection
    } else {
        return false;
    }
}
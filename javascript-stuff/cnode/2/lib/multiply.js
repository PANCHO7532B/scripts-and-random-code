const fs = require("fs");
const createFile = (base = 5, list = false) => {
    let output = "", filename = "";
    console.log("==============================")
    console.log(`   Table of ${base}`);
    console.log("==============================");
    for(let c = 0; c < 10; c++) {
        //console.log(5 * (c + 1));
        output += `${base} x ${c + 1} = ${base * (c + 1)}\r\n`;
    }
    if(list) {
        console.log(output);
    }
    filename = `output-${base}.txt`;
    
    console.log("[INFO] File created successfully");
    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(filename, output);
        } catch(error) { reject("Error while writing file"); }
        if(fs.existsSync(filename)) {
            resolve(`Created file: ${filename}`);
        } else {
            reject("Something failed");
        }
    });
}
module.exports = {
    createFile
};
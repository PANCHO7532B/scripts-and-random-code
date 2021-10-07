const fs = require("fs");
const {createFile} = require("./lib/multiply");
const argv = require("yargs").option("b", {
    alias: "base",
    type: "number",
    demandOption: true
}).option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false
}).check((argv, opts) => {
    if(isNaN(argv.b)) {
        throw "Base must be a number";
    }
    return true;
}).argv;
console.clear();
createFile(argv.b, argv.l).then((filename) => console.log(`File ${filename} created`))
                .catch((err) => console.log(err));
// SIP Decryptor
// Copyright (c) PANCHO7532, HCTools Group - 2021
const crypto = require("crypto");
const fs = require("fs");
const key = Buffer.from("GS4ECAgEBAkFWSlZOF9UFw=", "base64");
const file = Buffer.from(fs.readFileSync(process.argv[2]).toString(), "base64");
const aesStage = crypto.createDecipheriv("aes-128-ecb", key, null);
let result = aesStage.update(file, "utf-8");
result += aesStage.final("utf-8");
console.log(result);
process.exit();

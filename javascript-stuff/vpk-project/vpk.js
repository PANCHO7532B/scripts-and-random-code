const fs = require('fs');
function stringReader(buffer, offset, breaker) {
    var resp = "";
    while(true) {
        if(buffer[offset] != breaker) {
            resp += String.fromCharCode(buffer[offset].toString());
            offset++;
        } else {
            break;
        }
    }
    return resp;
}
//valve signature: 0x55AA1234
//indexes:
//signature: 0
//vpk version: 4
//tree size (directory length): 8
//FileDataSectionSize: 12 (0 for CSGO?)
//ArchiveMD5SectionSize: 16
//OtherMD5SectionSize: 18 (should be always 48)
//SignatureSectionSize: 22 (0 for CSGO and The Ship, 296 for HL2, HL2:DM, HL2:EP1, HL2:EP2, HL2:LC, TF2, DOD:S & CS:S)
const vpkfile = fs.readFileSync(__dirname + "/pak01_dir_hl2.vpk");
const signature = "0x" + vpkfile.readUInt32LE(0).toString(16);
const version = vpkfile.readUInt32LE(4);
const treeSize = vpkfile.readUInt32LE(8);
const fds = vpkfile.readUInt32LE(12);
const amd5s = vpkfile.readUInt32LE(16);
const omd5s = vpkfile.readUInt32LE(20);
const sssz = vpkfile.readUInt32LE(24);
console.log("Signature: " + signature);
console.log("VPK Version: " + version);
console.log("Directory Length: " + treeSize);
console.log("FileDataSectionSize: " + fds);
console.log("ArchiveMD5SectionSize: " + amd5s);
console.log("OtherMD5SectionSize: " + omd5s);
console.log("SignatureSectionSize: " + sssz);
//file reading?
//starting from 28, extension to use
console.log("[INFO] - Rebuilding directory structure..");
console.log("RAW data size: " + vpkfile.length);
/*
* HL2 format structure
*/
var binData = 28;

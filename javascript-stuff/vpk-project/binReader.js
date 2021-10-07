module.exports.toArray = function(content, separator) {
    return content.split(separator);
}
module.exports.read32LEInt = function(content, idx) {
    var response = {};
    response["result"] = content.readUInt32LE(idx);
    response["nextByte"] = idx + 4;
    return response;
}
module.exports.readString0 = function(content, idx) {
    //read string from binary and break when null detected.
    var response = {};
    var preData = content.slice(idx, content.length);
    for(c = 0; c < preData.length; c++) {
        if(preData[c] == "\0") {
            response["nextByte"] = idx + c;
            break;
        }
        response["result"] = String.fromCharCode(preData[c]);
    }
    return response;
}
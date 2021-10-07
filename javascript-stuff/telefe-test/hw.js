var string = "Hello world :v";
var arr = [], buf = [];
for(c = 0; c < string.length; c++) {
    arr.push(string.charCodeAt(c));
}
console.log();
while(arr.length != 0) {
    buf.push(String.fromCharCode(arr[arr.length-1]));
    arr = arr.slice(0, arr.length-1);
    if(arr.length == 0) {
        for(;;) {
            process.stdout.write(buf[buf.length-1]);
            buf = buf.slice(0, buf.length-1);
            if(buf.length == 0) {
                process.stdout.write("\r\n");
                break;
            }
        }
    }
}
process.exit(0);
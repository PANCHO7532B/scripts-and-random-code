console.log("start");
setTimeout(() => {
    console.log("first timeout")
}, 3000);
setTimeout(() => {
    console.log("second timeout")
}, 0);
setTimeout(() => {
    console.log("third timeout")
}, 0);
console.log("end")
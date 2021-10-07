const http = require('http').createServer();
const io = require('socket.io')(http);
io.on('connection', function(s) {
    s.on('data', function(data) {
        //conn
        console.log("reeeeeeee");
    });
});
http.listen(8080);
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('static'));

app.use(function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

var io = require('socket.io').listen(app.listen(port));

var messages = [];

io.sockets.on('connection', function (socket) {
    
    socket.on('getAllMsgz', function () {
        socket.emit('allMsgz', messages);
    });
    
    socket.on('createMsg', function (message) {
        messages.push(message);
        
        io.sockets.emit('msgAdded', message);
    });
    
});

console.log('TechNode is on port ' + port + '!');

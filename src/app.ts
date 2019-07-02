import express from 'express';
import socket from 'socket.io';

var app = express();

const server = app.listen(8888, function() {
  console.log('server is running on port 8888');
});

const io = socket(server);

io.on('connection', socket => {
  socket.on('SEND_MESSAGE', function(data) {
    io.emit('RECEIVE_MESSAGE', data);
  });
});

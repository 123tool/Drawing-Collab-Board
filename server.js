const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('User Connected: ' + socket.id);

    socket.on('mousemove', (data) => {
        // Broadcast ke semua user kecuali pengirim
        socket.broadcast.emit('moving', data);
    });

    socket.on('clear', () => {
        io.emit('clearCanvas');
    });

    socket.on('disconnect', () => {
        io.emit('clientDisconnect', socket.id);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`SPY-E Board running on: http://localhost:${PORT}`);
});

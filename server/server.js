const express = require('express');

// Configuracion para socket
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

// Levantar el Servidor para correr Socket, integrado con Express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Iniciar el servicio socket
module.exports.io = socketIO(server);
require('./sockets/socket');

// Cambiamos app por server
server.listen(port, (err) => {

    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);

});
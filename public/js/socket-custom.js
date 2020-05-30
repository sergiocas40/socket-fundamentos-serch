var socket = io();

// Funcion para conectarse al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Avisar cuando se haya perdido conexion con el srevidor
socket.on('disconnect', () => {
    console.log("Perdimos conexion con el servidor");
});

// Emitir informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Sergio',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchando al servidor
socket.on('enviarMensaje', function(msg) {
    console.log('Server: ', msg);
});
// Requerimos el objeto io
const { io } = require('../server');

// Verificar cuando un usuario se conecto a este servidor
io.on('connection', (client) => {

    // Emitir mensaje al cliente cuando se conecta
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    console.log("usuario conectado");

    // Detectar cuando un usuario se desconecto
    client.on('disconnect', () => {
        console.log("Usuario descoenctado");
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);

        // Re enviar el mensaje que viene de un cliente a todos los 
        // clientes conectados.
        // data: es el mensaje que viene del cliente
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {

        //     // Si en el mensaje recibido viene el campo usuario, mandamos un mensaje
        //     // mediante el callback
        //     callback({
        //         resp: 'Todo salio bien.' 
        //     });
            
        // } else {

        //     // Si en el mensaje recibido no viene el campo usuario, mandamos un mensaje
        //     // mediante el callback
        //     callback({
        //         resp: 'Todo salio mal !!!' 
        //     });            
        // }
    });

});
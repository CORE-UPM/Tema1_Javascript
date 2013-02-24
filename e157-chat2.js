var net = require('net');
var sockets = [];    // Array de clientes conectados

var server = net.createServer(function(socket) { // CALLBACK: conexión de cliente
	sockets.push(socket);   // Añade socket a array

	socket.on('data', function(d) {               // CALLBACK: mensaje de cliente
	    for (var i=0; i < sockets.length; i++) {
	    	if (sockets[i] == socket) continue;
	    	sockets[i].write(d);                  // Envío de msjs al resto
	    }
	});

	socket.on('end', function() {          // CALLBACK: desconexión de cliente
	    var i = sockets.indexOf(socket);
	    sockets.splice(i, 1);              // Eliminar cliente del array
	});
});

server.listen(8000);
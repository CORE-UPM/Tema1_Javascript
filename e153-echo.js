var net = require('net');
var port = (process.argv[2] || 9000);
      // Se crea socket de servidor
var server = net.createServer(function(socket) {
	socket.write('Echo server:\n'); // Saludo

	socket.on('data', function(data) {
	    socket.write(data); // Eco de datos
	});
});

server.listen(port);

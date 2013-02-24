var net = require('net');
var host = (process.argv[2] || "localhost");
var port = (process.argv[3] || 9000);

var s = new net.Socket();   // Crear socket cliente

s.connect(port, host);      // Conecta con servidor

s.on('data', function(data) {   // LLegan datos
	process.stdout.write(data+""); 
});

s.on('error', function(e) {     // No hay servidor
	console.log("Error "+host+":"+port); 
	s.destroy();
	process.exit();
});

process.stdin.on('data', function(data) { 
	s.write(data);      // Reenvio datos de teclado
});

process.stdin.resume(); // Activar entrada éstandar
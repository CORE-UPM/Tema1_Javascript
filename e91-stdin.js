 // arranca stream
process.stdin.resume();

 // Configura entrada ASCII (sino buffer binario)
process.stdin.setEncoding('ascii');

 // Manejador de evento 'data'
 //  -> bucle de lectura de lineas
process.stdin.on('data', function(line) {
  console.log(line);
});

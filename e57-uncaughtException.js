// define manejador de evento
process.on('uncaughtException', function(err) {
  console.log('EXCEPCION CAPTURADA: \n  -> ' + err);
});

console.log('Este mensaje saldra por consola');

// No estar definida, disparará uncaughtException
funcionIndefinida();

console.log('Este mensaje NO saldra por consola');

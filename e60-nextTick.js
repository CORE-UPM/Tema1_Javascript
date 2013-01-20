setTimeout(function() { console.log('Evento A');}, 2);
setTimeout(function() { console.log('Evento B');}, 0);

process.nextTick(function() { console.log('Tick D');});
process.nextTick(function() { console.log('Tick E');});
console.log('Fin de Programa Principal');
var assert = require('assert');
var wc = require('./wordcount');

// Test 1

assert.equal("4", wc.wordcount("How are you today?"),
	                       'A1. Una linea' );
assert.equal("4", wc.wordcount("How are\n\ryou today?"), 
	                       'A2. Dos lineas');
assert.equal("5", wc.wordcount("He doesn't feels well today"), 
	                       'A3. Reconoce comilla');
assert.equal("8", wc.wordcount("How do you feel today?\n\tI feel ill."),
	                       'A4. 2 lineas, segunda linea con tabulador');
assert.equal("5", wc.wordcount("Seren-\ndipituous broken in two lines"),
	                       'A5. Palabra partida en 2 líneas');
assert.equal("4", wc.wordcount("Se-\n\rren-\ndip-i-\ntous in four lines"),
	                       'A6. Palabra con 4 guiones en 4 líneas');
assert.equal("3", wc.wordcount("Word with hy-phen"),
	                       'A7. Palabra partida con guiones');

console.log('Test 1: passed. 7 Assertions ok');

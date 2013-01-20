var fs = require('fs');
var filehandle = fs.readFile('e04-file-bin.js', 
	function(err, data) {
		console.log(data) 
});
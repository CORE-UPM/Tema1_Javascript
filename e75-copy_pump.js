var fs = require('fs'),
    util = require('util');

if (process.argv.length != 4){  // parametros mal?
  console.log('   syntax: "node copy <orig> <dest>"');
  process.exit()            // finaliza proceso node
}

//Open files as readable streams
var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);

util.pump(readStream, writeStream);
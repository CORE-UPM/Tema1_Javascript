var fs = require('fs');
var wc = require('./wordcount');

if (process.argv.length != 3){
  console.log('   syntax: "node wordcount <file>"');
  process.exit()
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    console.log('Words: ' + wc.wordcount(data));
  }
);

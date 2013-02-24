var fs = require('fs');

if (process.argv.length != 3){
  console.log('   syntax: "node wordcount <file>"');
  process.exit()
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    data=data.replace(/^[^a-zA-Z_]*$/, "");
    console.log('Words: ' + data.replace(/[^a-zA-Z_]*[a-zA-Z]+[^a-zA-Z_]*/g,"w").length);
  }
);

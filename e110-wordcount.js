var fs = require('fs');

if (process.argv.length != 3){
  console.log('   syntax: "node wordcount <file>"');
  process.exit()
}

function count (data){

// Cuenta número de matches. 
  return (data.match(/[a-zA-Z]+/g) || []).length ;
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    console.log('Words: ' + count(data));
  }
);

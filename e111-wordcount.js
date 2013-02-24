var fs = require('fs');

if (process.argv.length != 3){
  console.log('   syntax: "node wordcount <file>"');
  process.exit()
}

function count (data){

//sustituye string sin ninguna palabra por string vacío
  data=data.replace(/^[^a-zA-Z_]*$/, "");

// sustituye cada palabra por una "w" y calcula longitud de string
  return data.replace(/[^a-zA-Z]*[a-zA-Z]+[^a-zA-Z]*/g,"w").length
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    console.log('Words: ' + count(data));
  }
);

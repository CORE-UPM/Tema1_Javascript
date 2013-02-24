var fs = require('fs');

if (process.argv.length != 3){
  console.log('   syntax: "node wordcount <file>"');
  process.exit()
}

function count (data){
  data=data.replace(/\W*$/, "");
  return data.replace(/\W*\w+\W*/g,"w").length
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    console.log('Words: ' + count(data));
  }
);

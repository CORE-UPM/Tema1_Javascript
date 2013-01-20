var fs = require('fs');   // importa modulo file system

if (process.argv.length != 4){  // parametros mal?
  console.log('   syntax: "node append <orig> <dest>"');
  process.exit()            // finaliza proceso node
}

fs.readFile(
  process.argv[2],          // fichero <orig>
  function(err, data) {     // callback de finalización
    fs.appendFile(
      process.argv[3],      // fichero <dest>
      data,                 // contenido de <orig>
      function (err) {      // callback de finalización
        if (err) throw err;
        console.log('files appended');
      }
    );
  }
);

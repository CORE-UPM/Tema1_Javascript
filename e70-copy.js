var fs = require('fs');     // importa modulo file system

if (process.argv.length != 4){  // parametros mal?
  console.log('   syntax: "node copy <orig> <dest>"');
  process.exit()            // finaliza proceso node
}

fs.readFile(
  process.argv[2],          // fichero <orig>
  function(err, data) {     // callback de finalización
    fs.writeFile(
      process.argv[3],      // fichero <dest>
      data,                 // contenido de <orig>
      function (err) {      // callback de finalización
        if (err) throw err;
        console.log('file copied');
      }
    );
  }
);

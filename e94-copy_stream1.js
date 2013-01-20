var fs = require('fs'), orig, dest;

// Open either stdin or 'argv[2]' as a readable stream
if (!(process.argv[2])) { process.stdin.resume(); orig = process.stdin; } 
else { orig = fs.createReadStream(process.argv[2]); } // open file as stream

// Open either stdout or 'argv[3]' as a readable stream
if (!(process.argv[3])) { dest = process.stdout; } 
else { dest = fs.createWriteStream(process.argv[3]); } // open file as stream

// The "data" event fires, when data is read from a file or from stdin
orig.on('data', function(data) { dest.write(data); });

// When reading finishes clean-up
orig.on('close', function () {
  if (process.argv[3]) { dest.end();} // close output file
  console.log("Finished.");
});

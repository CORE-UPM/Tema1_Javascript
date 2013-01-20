var i;
for(i = 0; i < process.argv.length; i++) {
    console.log('Parametro ' + i + " = " + process.argv[i]) ;
}

// programa equivalente con método de JavaScript 1.5
process.argv.forEach(function (val, index, array) {
  console.log('Parametro ' + index + ': ' + val);
});

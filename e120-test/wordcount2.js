exports.wordcount = function (data){

// Cuenta número de matches. 
  return (data.match(/[a-z]+/gi) || []).length ;
}

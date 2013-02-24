exports.wordcount = function (data){

// Cuenta número de matches. 
  return (data.match(/[a-z']+(-[\n\r\f\v]*[a-z']+)*/gi) || []).length ;
// Reconoce apostrofe (it's) y palabras partidas entre líneas (he-\nllo).
}

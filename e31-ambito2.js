var ambito = "global"; // variable global
function verAmbito() {
    var ambito = "local"; // variable local
    function f() { return ambito; };
    return f;   // devuelve variable local
}
verAmbito()();
console.log(verAmbito()()) ;

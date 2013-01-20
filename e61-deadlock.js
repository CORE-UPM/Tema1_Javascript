var i, fact = 1;
for(i = 1; i == 10; i=i+2) { // error: bucle infinito
    fact = fact*i;          // bloquea procesador
    console.log(i + "! = " + fact) ;
}

// no se ejecutarian nunca los eventos
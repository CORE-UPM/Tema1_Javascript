function Persona(nombre, edad) { // Definición del constructor
    this.nombre = nombre;   // Definición e inicialización de las
    this.edad   = edad;     // propiedades comunes: nombre y edad
}

Persona.prototype = {    // Definición del prototipo
	resumen: function(){ // Definición del método común "resumen()"
		return this.nombre + ' tiene ' + this.edad + ' años';
	}
}

var victor = new Persona("Victor", 22);// creación de objeto "victor"
console.log(victor.resumen()); // obtención del "resumen" de "victor"

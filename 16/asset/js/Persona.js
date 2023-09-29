const log = console.log;

function Persona(nombre, edad, dni, lenguajesHabla) {
  this.nombre = nombre;
  this.edad = edad;
  this.dni = dni;
  this.lenguajesHabla = lenguajesHabla;
}

Persona.prototype.saludar = function () {
  return "Hola soy, " + this.nombre;
};

Persona.prototype.idiomasQueHablo = function () {
  for (let idioma of this.lenguajesHabla) {
    log("Yo hablo: " + idioma);
  }
  return null;
};

export { Persona };

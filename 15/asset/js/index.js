/**
 * Que son las funciones ?
 * Son objetos que nos permite simplificar , dividir, darle una responsabilididad unica y ser reutilizable bloques de codigo con funcionalidades
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * Formas simples > Declaracion | invocacion
 * Diferencia entre parametros y argumentos
 * RestParams
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 * Valores de Retorno
 * https://medium.com/swlh/return-early-pattern-3d18a41bba8
 * Fail Fast | Guard Clause | Happy Path
 *
 * Tipos de funciones
 * https://www.linkedin.com/feed/update/urn:li:activity:7111533784428101632?utm_source=share&utm_medium=member_desktop
 *
 * SCOPE de una variable en una funcion
 * CALLBACKS
 * CLOUSURE
 */

/**
 * https://stackoverflow.com/questions/3922599/is-it-a-bad-practice-to-use-break-in-a-for-loop
 *
 */

/*
function(x,b,c) => y

function <nombre_de_funcion>(parametros){
    // scope 
    var nombre = "kajskldjas"

    return "" || number || Boolean || function ||Object
}

function(){
    ...code
    return 
}


nombre_function(args)

arrow functions


(params ) => {
    ..logica
    return 4
}
*/

// CALCULADORA

// calcular me sume una secuencia de numeros

import { suma, mult, div, leapYear, response } from "./functionsGral.js";

// funcion que me permita obtener una lista de numeros a sumar
// que me detenga cuando ya no quiera mas

// let values = insertValues();

// document.body.innerHTML = suma(values);

// guard clause early return

/* function calculadora(cb, a = 0, b = 0) {
  return cb(a, b);
}

console.log(
  "division",
  calculadora(div, 10, 2),
  "sumar",
  calculadora(suma, 34, 1)
); */

//

// crear una funcion que me permita saber si es bisiesto

// console.log(leapYear(2024));

let inputYear = document.getElementById("year");
let writer = response("response");

//
inputYear.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // ACA ESTABA MI ERROR CHICOS!! TENIA QUE DECLARLO INTERNAMENTE!!!!

    let year = inputYear.valueAsNumber;
    writer(leapYear(year) ? "es bisiesto" : "no es bisiesto");
  }
});

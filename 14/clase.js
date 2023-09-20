/**
 * Parte de la clase 14
 *  - Estructuras de Control IF - ELSE -SWITCH
 *  - Loopers : FOR - While - DoWhile
 */

/*
    que es una estructura de control?
    -   es un punto de infleccion a la decisión de tu codigo
    -   Una forma de entender esto es como un arbol de decisiones que nos permiten
    desarrollar procesos de conpcetos booleanos
*/

/*

IF - ELSE - SWITCH
*/

/*
let edad = prompt("ingrese su edad");

let validarDato = !isNaN(edad); // esta validacion es ==> verica el dato ingresado sea un numero

if (validarDato == true) {
    console.table({
        message: "el dato es correcto",
    });
    console.warn("Es un valor numérico");
    console.log("la persona es mayor de edad?", parseInt(edad) >= 18);
} else {
    console.error("No es un valor numerico");
}

console.log("Volvi al codigo principal");

*/

/*
Ejemplo de uso de ELSE IF
*/

/*tablas verdad de or*/

// console.table({
//     falso_falso: false || false,
//     falso_verdadero: false || true,
//     verdadero_falso: true || false,
//     verdadero_verdadero: true || true,
// });

// let edad = prompt("ingrese su edad");

// edad_validada = parseInt(edad);

// if (edad_validada > 99) {
//     console.warn("no es una edad muy logica", edad_validada);
// } else if (edad_validada < 12 && edad_validada >= -1) {
//     // &&   --   ||
//     console.error("es una edad bastante rara", edad_validada);
// } else if (edad_validada > 18) {
//     console.log("la edad me sugiere que es mayor de edad", edad_validada);
// } else {
//     console.log(
//         "edad que se puede encontrar en estos puntos de inflexion =>",
//         edad_validada,
//     );
// }

/*
    SWITCH
*/

/*
let opciones = prompt(
    "elegi la operacion \n => suma (+) \n => resta (-) \n => multiplicacion (*) \n => default division (/)",
);

let numeroA = prompt("ingrese numero A");
let numeroB = prompt("ingrese numero B");

numeroA = parseInt(numeroA);
numeroB = parseInt(numeroB);

console.table({
    numeroA,
    numeroB,
});

switch (opciones) {
    case "suma":
    case "+":
        console.warn("Total de valor : => ", numeroA + numeroB);
        document.write("Total de valor : => " + (numeroA + numeroB));
        break;
    case "resta":
    case "-":
        console.log("Total de valor : => ", numeroA - numeroB);
        document.write("Total de valor : => " + (numeroA - numeroB));
        break;

    case "multiplicacion":
    case "*":
        console.log("Total de valor : => ", numeroA * numeroB);
        document.write("Total de valor : => " + numeroA * numeroB);
        break;

    default:
        console.log("Total de valor : => ", numeroA / numeroB);
        document.write("Total de valor : => " + numeroA / numeroB);
}
*/

// Operador ternario

// (condicion) ? TRUE==> algo : FALSE => SI ES FALSO

// let validador =
//     validarDato == true
//         ? "la persona es mayor de edad?" + (parseInt(edad) >= 18)
//         : "El valor no es numérico ";

/**
 * Iteracion For | while | do-while
 */

/*
Tanto FOR como while te permite repetir una accion hasta que exista una condicion de 
*/

// FOR => iteracion simple

// let condicion = prompt("ingresa condicion de quiebre");
// condicion = parseInt(condicion);

// for (let i = 0; i < condicion; i++) {
//     document.write("<h1>Iteracion " + i + "</h1>");
// }

// console.log(i);

/*
let frutas = ["🍉", "banana", "🥥"];

for (const fruta of frutas) {
    let data =
        "<div>" +
        "<h1>" +
        " La fruta elegida es: ".toUpperCase() +
        fruta +
        "<h1></div>";
    document.write(data);
}
*/

/*
    while iteracion con condicion booleana
*/

/*
let oprtunidades = 2;

while (true) {
    let pass = prompt("ingrese password");

    if (oprtunidades == 0) {
        console.log("Sin oportunidades");
        console.error("te quedaste sin posibilidades");
        break;
    }

    if (pass != "admin") {
        console.log("Te quedan : ", --oprtunidades, " oportunidades");
    } else {
        console.log("bienvenido");
        break;
    }
}

console.log(pass);

*/

// let edad = prompt("ingrese la edad");
// edad = parseInt(edad);

// while (edad < 18) {
//     edad = prompt("ingrese la edad");
//     edad = parseInt(edad);
// }

// console.log(edad);

// console.log("al fin saliste!!! 🍉");

/*
    clase 15
    -   Funciones 
            * conceptos interesantes acoplamiento y cohesion : https://www.disrupciontecnologica.com/acoplamiento-y-cohesion/
                -   si A -> usa B entonces A depende de B, esto es el concepto de acoplamiento.
                -   cohesion  ==> 
                -   lo mejor => Alta cohesion Bajo Acoplamiento

            * scope global
            * scope de bloque
    -   Programacion Modular --> Programacion Funcional // te permite dividir tu codigo
    -   Funciones anonimas y arrow functions
    -   CallBacks y Closure
*/

// Que es una funcion?
// Una funcion te retorna un valor , si no es un procedimiento

// function saludar(nombre) {
//     /**
//      *
//      *
//      * BLOQUE DE CODIGO
//      *
//      */
//     return "hola " + nombre;
// }

// function saludar2(nombre) {
//     console.log(nombre);
//     nombre += "adicionado!";
// }

// console.log(sumar);
// console.log(pepito);

// var pepito = "lola";

// function sumar(n1, n2) {
//     var numeroFijo = 0;
//     return n1 + n2;
// }

// Scope global (VAR)
// Scope de bloque (LET)

// Ejercicios de una calculadora

// funciones anonimas y arrow function

const verificarPassword = function (pass) {
    let regexp = /^[A-Z]/;
    return regexp.test(pass);
};

const validatorPassword = (pass) => /^[A-Z]/.test(pass);

// const saludos = function (nombre) {
//     return nombre;
// };

// const saludos = (nombre) => nombre;

/*
const checkPassWord = (pass) => /^[A-Z]/.test(pass);

function checkPassWordNormal(pass) {
    return /^[A-Z]/.test(pass);
}
*/

// callback

/*
function saludar(nombre, callBack) {
    return callBack(nombre);
}

const saludarViejo = function (nombre) {
    return "Buenos dias, Sr. " + nombre;
};

const saludarAmigo = (nombre) => "que onda, " + nombre + "?";

let msgretorno = saludar("Marcelo", saludarViejo);

console.log(msgretorno);

msgretorno = saludar("Nicolas", saludarAmigo);

console.log(msgretorno);

msgretorno = saludar("ALF", (nombre) => "No hay problema, dijo " + nombre);

console.log(msgretorno);

*/

// Tiene una forma de Strategy Design patter

// Se usa principalmente para que a una funcion tenga la posibilidad de hacer acciones en base a una funcion.
// Ejemplo tengo una lista y a cada una que le quiero hacer una modificación.

// Ejemplo básico de una callback

// closure

// Lexical Scope Devuelve una función dentro de un entorno léxico . https://javascript.plainenglish.io/scope-chain-and-lexical-environment-in-javascript-eb1f6e60997e
// Lexical Enviroment => es lo que genera para que pueda ejecutarse todo lo necesario

/*
function logger() {
    let hash = "890890123-123123 => ";

    // return (status) => hash + status;
    return function (status) {
        return hash + status;
    };
}

let l = logger();

console.log(l);

let retorno = l("1 : algo salio mal");

console.log(retorno);

retorno = l("2: todo bien ahora!!");

console.log(retorno);

console.log(hash);

*/

/*ejercicio
    calculadora => hacer una calculadora de las operaciones basicas
*/

/*
let opciones = prompt(
    "elegi la operacion \n => suma (+) \n => resta (-) \n => multiplicacion (*) \n => default division (/)",
);

const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const sum = (a, b) => a + b;
const res = (a, b) => a - b;

const calculadora = (a, b, cb) => cb(a, b);

// const calculadora = function (a,b,cb){
//     return cb(a,b)
// }

let a = prompt("ingrese numero A");
let b = prompt("ingrese numero B");

a = parseInt(a);
b = parseInt(b);

let retorno = "";

switch (opciones) {
    case "suma":
    case "+":
        retorno = calculadora(a, b, sum);
        document.write("Total de valor : => " + retorno);
        break;
    case "resta":
    case "-":
        retorno = calculadora(a, b, res);
        document.write("Total de valor : => " + retorno);
        break;

    case "multiplicacion":
    case "*":
        retorno = calculadora(a, b, mult);
        document.write("Total de valor : => " + retorno);
        break;

    default:
        retorno = calculadora(a, b, div);
        document.write("Total de valor : => " + retorno);
}

*/

/*
contar la cantidad de letras a que existe en una frase
*/

/*
let palabras = "contar la cantidad de letras a que existe en una frase";

let contador = 0;

for (let i = 0; i < palabras.length; i++) {
    console.log("la letra es: =>", palabras[i]);

    if (palabras[i] == "a") {
        contador += 1;
        console.log("✅");
    }
}

console.log("la cantidad de letras a es = ", contador);

*/
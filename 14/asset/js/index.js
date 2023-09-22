import {respuestaPositiva} from "./respuestaPositiva.js" 
import {respuestaNegativa} from "./respuestaNegativa.js"
import {respuestaNula} from "./respuestaNula.js"

import { respuestaX } from "./respuetaX.js";

/**
 * 
 * TABLA DE VERDAD DE AND 
*/


console.table({
    falso_falso: (15 < 9) && !(15 > 9),
    falso_verdadero: ("franco" != "franco") && true,
    verdadero_falso: true && false,
    verdadero_verdadero: true && true,
});


/**
 * 
 * TABLA DE VERDAD DE OR
 */



 console.table({
     falso_falso: false || false, // false
     falso_verdadero: false || true, //true
     verdadero_falso: true || 0,  //true
     verdadero_verdadero: 1 || 1,
 });




/* 
const PWDADMIN = "1234"


let validacion = prompt("ingrese su password") 



if (validacion === PWDADMIN){
  document.body.innerHTML=respuestaPositiva
} 

else if(!validacion || validacion === ""){
  document.body.innerHTML=respuestaNula
  
}
else {
  document.body.innerHTML=respuestaNegativa
  
} */


/**
 * 
 * FOR
 * 
*/

/* let stopper = prompt("cuantas veces quiero a pepe")

let data = ""

for (let i = 0; i < Number(stopper) ; i++ ){
  data += `<span> ${i}</span>`  + respuestaX   
}
 */
/* 
document.body.innerHTML = data
 */
/* const  listaFrutas = ["🍊","🥭","🍌","🍋","🍌","🍒","🍑","🍆","🍍","🍋"]
let accFruta = " EMPEZAMOS ! <br>"

for(let fruta  of listaFrutas){

  accFruta += "<p>"+fruta+"</p>"
}

document.body.innerHTML = accFruta

 */


/**
 * 
 * WHILE
*/


const pwd =  "123"


/* while(true){
  if (pwd === prompt("ingrese pass")){
    document.body.innerHTML = "BIENVENIDO!"
    break
  }
}


document.body.innerHTML += "GRACIAS" 
 */




while(true){

  if ( prompt("agrego otro item") != "" ){
    document.body.innerHTML += "un item!"
  } else break

}


prompt("desea agregar su nombre?") == "si" ? 
document.body.innerHTML += "MI NOMBRE ES ALGO" :
alert("no queres que ponga tu nombre")



/*

  UN LOGIN 
  - PEDIRTE TU EMAIL
  - PASS

  MATCH ==> RENDER > BIENVENIDO nombre de usuario
  !MATCH => alert ("el password es incorrecto") si el pass es incorrecto
  !MATCH => alert("el email es incorrecto") si el email es incorrecto
  */
/*function suma(params) {
  let total = 0;

     for (let i = 0; i < params.length; i++) {
    total += params[i];
  } 

  for (let arg of params) {
    total += arg;
  }

  return total;
}
*/
const mult = (a, b) => a * b;
const suma = (a, b) => a + b;
const div = (a, b) => a / b;
/* 
const insertValues = () => {
  let values = [];
  let value = null;

  while (true) {
    value = prompt("ingrese valor a sumar, para terminar ingrese = ");

    if (value != "=") {
      values.push(Number(value));
    }

    if (value == "=") {
      break;
    }
  }
  return values;
}; */

const breakIfIsNaN = (data) => (isNaN(Number(data)) ? 0 : Number(data));

const breakDistintos = function (data) {
  if (data === 0) {
    return null;
  }

  if (data == 1 || data == "1") {
    console.log("por algun motivo esto no es valido");
    return null;
  }

  return data;
};

const leapYear = (year) => {
  /*   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }

  return false;
 */
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
};

const response = (containerId) => {
  /**
   * ESTO ES UN CLOSURE
   */
  let container = document.getElementById(containerId);
  return (respuesta) => (container.innerHTML = respuesta);
};

export { suma, mult, div, leapYear, response };

const { log } = console;

// const nombres = [];

// const apellidos = new Array();

// log(nombres, apellidos);

// nombres.push("marcelo");
// nombres.push("matias");
// nombres.push("jesica");

// nombres.push({
//   nombre: "gaston",
//   email: "gaston@mail.com",
//   status: true,
// });

// nombres.push(() => log("pepe"));
// nombres[4]();

// for (let item of nombres) {
//   log(item);
// }

// // cb en arrays

// nombres.forEach((nombre) => log("este es el item : ", nombre));

// nombres.forEach(
//   (nombre) => (document.body.innerHTML += "este es el item" + nombre + "<br>")
// );

// let resultado = nombres.map((e) => e.length);

// log(resultado);

// let nombresFiltrado = nombres.filter((e) => e != "matias");

// log(nombresFiltrado);

// let [uno, dos, tres, ...objetos] = nombres;

// log(uno, dos, tres, objetos);

// let user = {
//   nombre: "alejandro",
//   userName: "4lenjandro",
//   status: true,
// };

// /* import data from "./db.json" assert { type: "json" };

// log(data); */

// // fetch

// /* fetch("./asset/js/db.json")
// .then((res) => res.json())
//   .then((data) =>
//     data.pass == prompt("su password")
//       ? alert("bienvenido")
//       : alert("equivocado")
//   ); */

// /* fetch("https://api.chucknorris.io/jokes/random")
//   .then((res) => res.json())
//   .then((data) => sessionStorage.setItem("joke", JSON.stringify(data)));
//  */

// let joke = JSON.parse(sessionStorage.getItem("joke"));

// log(joke.value);

import { Render } from "./Render.js";
import { renderData } from "./renderData.js";

const app = new Render("app");
const API_LOCAL = "./asset/js/beer.json";
const API_PRD = "https://api.sampleapis.com/beers/ale";

app.fetchData(API_PRD, renderData);

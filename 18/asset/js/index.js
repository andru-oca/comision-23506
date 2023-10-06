/* let main = document.querySelector("main");

let p = document.createElement("p");
let div = document.createElement("div");

div.innerHTML = "<h1>Hola soy un h1</h1>";
div.classList.add("porJS");
main.appendChild(div);

console.log(p.parentNode); */
/* 
let mainID = document.getElementById("main");
let mainQuery = document.querySelector("#main");

console.log(mainID, mainQuery);

let elementosDiv = [];

for (let i = 0; i < 6; i++) {
  let div = document.createElement("div");
  if (i % 2 == 0) {
    div.classList.add("alejandro");
  } else {
    div.classList.add("hector");
  }
  elementosDiv.push(div);
}

const validadorDeParametro = (inputValue) => inputValue < 20 && 0 < inputValue;

const btn = document.getElementById("donBoton");
btn.addEventListener("click", () => {
  let cubitos = document.querySelector(
    "header > input[type='number']"
  ).valueAsNumber;

  document.querySelector("header > input[type='number']").value = "";

  if (!validadorDeParametro(cubitos)) {
    alert("Ya se que vos , lisandro deja de porner cosas raras");
    return;
  }

  let elementosDiv = [];

  for (let i = 0; i < cubitos; i++) {
    let div = document.createElement("div");
    if (i % 2 == 0) {
      div.classList.add("alejandro");
    } else {
      div.classList.add("hector");
    }
    elementosDiv.push(div);
  }

  elementosDiv.forEach((div) => mainID.appendChild(div));
});
 */

const TOKEN = "ibc6kpjwf51zz6b9qd991l2psw9yaaed0ls6hycn";
const URL = "https://sheetdb.io/api/v1/d0vtlcfmzacuu";

const renderFunction = (data) => {
  // primera etapa crear elementos en una lista con los datos de la api

  let elementosDiv = data.map((e) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let image = document.createElement("img");
    image.src = "http://despacharweb.com.ar/Images/Foto2_RYS50x40AL.jpeg";

    p.innerText = e.email;

    div.appendChild(p);
    div.appendChild(image);
    return div;
  });

  console.log(elementosDiv);

  // seleccionar a donde voy a injectar
  let mainID = document.getElementById("main");
  // injectar con el proceso de cada uno de los elementos div

  elementosDiv.forEach((div) => mainID.appendChild(div));
};

const btn = document.getElementById("donBoton");
btn.addEventListener("click", () => {
  let cubitos = document.querySelector("header > input[type='number']");

  let url_limite = URL + `?limit=${cubitos.valueAsNumber}`;
  fetch(url_limite, {
    method: "GET",
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
    .then((res) => res.json())
    .then((data) => renderFunction(data))
    .catch((error) => {
      error;
    });
});

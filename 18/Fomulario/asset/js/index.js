// MANEJO DE LA DOM

// Verificar bajo cb de validacion // usar algunos regexp // manejar algunso items

// consumo desde una api variable
// filtrado de busqueda
// En un formulario

let formulario = document.getElementById("form-data");
console.log(formulario);

const dataFormulario = new FormData(formulario);
console.log(dataFormulario);

let NodeInputs = document.querySelectorAll(
    "#form-data  input:not(input[type='submit']"
);

console.log(NodeInputs);

function validation(validators) {
    const generalValidator = Object.entries(validators).map(([key, value]) => {
        let booleanState = value(document.getElementsByName(key)[0].value);
        if (booleanState == false) {
            alert(`El input de ${key} es incorrecto`);
        }
        return booleanState;
    });

    return generalValidator.every((e) => e === true);
}

const validators = {
    nombre: (input) => isNaN(Number(input)),
    apellido: (input) => isNaN(Number(input)),
    email: (email) => {
        const regexp =
            /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;

        return regexp.test(email);
    },
    website: (website) => {
        const regexp =
            /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
        return regexp.test(website);
    },
};

document.querySelector("form").addEventListener("submit", (e) => {
    return validation(validators);
});

// fetch with api bear token

//https://lenguajejs.com/javascript/peticiones-http/fetch/

const URL_WITH_BEARER_TOKEN =
    "https://sheetdb.io/api/v1/l424ztv3cd1h4?limit=10";
const TOKEN = "hbgpq3m0xqbsjtqovaerfseuxk59hkfzclj2vwlv";
fetch(URL_WITH_BEARER_TOKEN, {
    method: "GET",
    headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + TOKEN,
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log({ error }));

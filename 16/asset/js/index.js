import { Persona } from "./Persona.js";
import { User } from "./Users.js";

const log = console.log;

const functionObject = () => "pepe";

const leandro = {
  // Object Attr
  nombre: "Leandro Ferrero",
  edad: 25,
  dni: "ARG-897123",
  lenguajesHabla: ["Español", "Ingles", "Japones"],

  //Object Method

  saludar: function (saludo) {
    return saludo;
  },

  idiomasQueHablo() {
    for (let idioma of this.lenguajesHabla) {
      log("Yo hablo: " + idioma);
    }
    return null;
  },
};

log(leandro["dni"]);
log(leandro.dni);
log(leandro.lenguajesHabla);

/*
    ENTIDAD

    User 
        atributos
        - nombre
        - edad
        - dni

        metodos

        respirar()
        caminar()
        pagarElMonotributo()
*/

let lorena = new Persona("Lorena Martin", 21, "ARG-897987", [
  "ingles",
  "mandarin",
  "ruso",
]);

log(lorena);
log(lorena.edad);
lorena.idiomasQueHablo();

const hector = new User("hector", "198.11.10.01", "hector@mail.com");

log(hector.changeStatus());
hector.showData();
log(hector.changeStatus());
hector.showData();

//hector.getStatus();

log(hector.id);

log(User.id);

log(hector.ref);

const alejandro = new User("alejandro", "11.111.12.01", "987123@mail.com");

log(alejandro.ref);
alejandro.showData();

alejandro.setRegion("canada");

alejandro.showData();

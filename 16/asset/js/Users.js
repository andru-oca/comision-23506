const log = console.log;

export class User {
  static id = "#89789798liiou";

  ref = 999;

  constructor(nombre, ipAddress, email, online = true) {
    this.nombre = nombre;
    this.ipAddress = ipAddress;
    this.email = email;
    this.online = online;
  }

  setRegion = (region) => (this.region = region);

  showData() {
    log(`
    Hola soy  ${this.nombre}
    Mi IP Address es ${this.ipAddress}
    Mi status ${this.online ? "🟢" : "🔴"}    
    Mi region es ${this.region} 
    `);
  }

  #getStatus() {
    log(this.online);
    return this.online;
  }

  changeStatus() {
    this.online = !this.online;
    log(this.online);
    return this.online;
  }
}

import { Creacion } from "./CreacionData.js";

const insertDiv = new Creacion("app");
insertDiv.insertData("Hola soy una sintaxis mas amigable!");

export class Creacion {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  insertData(response) {
    this.container.innerHTML = `
    <h1>
    ${response}
    </h1>
    `;
  }
}

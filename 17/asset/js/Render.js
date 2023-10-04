const { log } = console;

export class Render {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  fetchData(URL, cb, options = {}) {
    fetch(URL, options)
      .then((res) => res.json())
      .then((data) => {
        if (!cb) {
          log(data);
          return;
        }

        let items = cb(data);
        this.#renderInContainer(items);
      });
  }

  #renderInContainer(items) {
    this.container.innerHTML = items;
  }
}

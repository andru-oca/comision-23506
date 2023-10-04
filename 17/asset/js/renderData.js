const { log } = console;

export function renderData(data) {
  let item;
  let items = "";

  if (!data) {
    log("no hay data");
    return null;
  }

  for (item of data) {
    let patter = `
        
        <div>
            <img src="${item.image}">
            <div>
            <h2> percio : ${item.price}
            </h2>
            <p> ${item.name}
            </p>
            </div>
        </div>
        `;

    items += patter;
  }

  return items;
}

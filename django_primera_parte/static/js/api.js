// app.js

document.getElementById('obtenerRazaBtn').addEventListener('click', obtenerRazaAleatoria);

function obtenerRazaAleatoria() {
    const url = "https://api.thedogapi.com/v1/breeds";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(razas => {
            if (razas.length === 0) {
                throw new Error("La lista de razas está vacía.");
            }

            const razaAleatoria = razas[Math.floor(Math.random() * razas.length)];
            return obtenerInformacionCompleta(razaAleatoria);
        })
        .then(informacionCompleta => {
            mostrarInformacion(informacionCompleta);
        })
        .catch(error => {
            console.error("Error al obtener la raza aleatoria:", error);
        });
}

function obtenerInformacionCompleta(raza) {
    const urlImagen = `https://api.thedogapi.com/v1/images/search?breed_id=${raza.id}`;

    return fetch(urlImagen)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud de la imagen. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(imagenData => {
            if (imagenData.length === 0) {
                throw new Error("La lista de imágenes está vacía.");
            }

            const imagenUrl = imagenData[0].url;

            return {
                raza: raza,
                imagenUrl: imagenUrl
            };
        })
        .catch(error => {
            console.error("Error al obtener la imagen:", error);
        });
}

function mostrarInformacion(informacion) {
    const raza = informacion.raza;
    const imagenUrl = informacion.imagenUrl;

    const informacionRazaElement = document.getElementById('informacionRaza');
    informacionRazaElement.innerHTML = `
        <p>Raza: ${raza.name}</p>
        <p>Altura: ${raza.height ? raza.height.metric || 'N/A' : 'N/A'} cm</p>
        <p>Peso: ${raza.weight ? raza.weight.metric || 'N/A' : 'N/A'} kg</p>
        <p>Imagen:</p>
        <img src="${imagenUrl}" alt="Imagen de la raza">
    `;
}

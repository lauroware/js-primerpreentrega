
const nombre = document.querySelector('#nombre');
const foto = document.querySelector('#foto');

const generarUsuario = async () => {
    //consulto a la API
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
}

//evento
document.addEventListener('DOMContentLoaded', generarUsuario);

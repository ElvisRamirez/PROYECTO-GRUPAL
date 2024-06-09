// Importar desde instalaciones.js
import { crearSeccionInstalacion, instalaciones } from '../js/instalaciones.js';
console.log("Instalaciones importadas:", instalaciones);
// Obtener el contenedor de instalaciones
const contenedorInstalaciones = document.getElementById('instalaciones');
console.log("Contenedor encontrado:", contenedorInstalaciones);

instalaciones.forEach(instalacion => {
    const seccionHTML = crearSeccionInstalacion(instalacion);
    console.log("HTML generado para", instalacion.titulo, ":", seccionHTML);
    contenedorInstalaciones.innerHTML += seccionHTML;
});

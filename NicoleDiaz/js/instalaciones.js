// Datos de las instalaciones
const instalaciones = [
    {
        titulo: "Área de Cardio",
        descripcion: "Encuentra las mejores máquinas para tu entrenamiento cardiovascular.",
        imagenes: [
            "../img/01.jpg",
            "../img/02.jpg",
            "../img/03.jpg"
        ]
    },
    {
        titulo: "Zona de Pesas Libres",
        descripcion: "Una amplia selección de pesas libres para tu entrenamiento de fuerza.",
        imagenes: [
            "../img/04.jpg",
            "../img/05.jpg",
            "../img/06.jpg"
        ]
    },
    {
        titulo: "Máquinas de Pesas",
        descripcion: "Máquinas de última generación para un entrenamiento eficiente.",
        imagenes: [
            "../img/07.jpg",
            "/NicoleDiaz/img/01.jpg",
            "/NicoleDiaz/img/01.jpg"
        ]
    },
    {
        titulo: "Spa",
        descripcion: "Relájate después de tu entrenamiento en nuestro lujoso spa.",
        imagenes: [
            "/NicoleDiaz/img/01.jpg",
            "/NicoleDiaz/img/01.jpg",
            "/NicoleDiaz/img/01.jpg"
        ]
    }
];

// Función para crear el HTML de una sección de instalación
function crearSeccionInstalacion(instalacion) {
    return `
        <div class="instalacion">
            <h3>${instalacion.titulo}</h3>
            <p>${instalacion.descripcion}</p>
            <div class="imagenes">
                ${instalacion.imagenes.map(img => `<img src="${img}" alt="${instalacion.titulo}">`).join('')}
            </div>
        </div>
    `;
}

// Exportar la función y los datos
export { crearSeccionInstalacion, instalaciones };
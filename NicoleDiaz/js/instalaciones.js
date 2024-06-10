// Datos de las instalaciones
const instalaciones = [
    {
        titulo: "Área de Cardio",
        descripcion: "Encuentra las mejores máquinas para tu entrenamiento cardiovascular.",
        imagenes: [
            "../NicoleDiaz/img/01.jpg",
            "../NicoleDiaz/img/02.jpg",
            "../NicoleDiaz/img/03.jpg"
        ]
    },
    {
        titulo: "Zona de Pesas Libres",
        descripcion: "Una amplia selección de pesas libres para tu entrenamiento de fuerza.",
        imagenes: [
            "../NicoleDiaz/img/04.jpg",
            "../NicoleDiaz/img/05.jpg",
            "../NicoleDiaz/img/06.jpg"
        ]
    },
    {
        titulo: "Máquinas de Pesas",
        descripcion: "Máquinas de última generación para un entrenamiento eficiente.",
        imagenes: [
            "../NicoleDiaz/img/07.jpg",
            "../NicoleDiaz/img/08.jpg",
            "../NicoleDiaz/img/09.jpg"
        ]
    },
    {
        titulo: "Spa",
        descripcion: "Relájate después de tu entrenamiento en nuestro lujoso spa.",
        imagenes: [
            "../NicoleDiaz/img/10.jpg",
            "../NicoleDiaz/img/11.jpg",
            "../NicoleDiaz/img/12.jpg"
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
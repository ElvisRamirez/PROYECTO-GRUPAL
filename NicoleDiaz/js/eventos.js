// Datos de los eventos
const eventos = [
    { imagen: '../NicoleDiaz/img/20.jpeg', texto: 'Maratón Benéfica: Corre por una causa.' },
    { imagen: '../NicoleDiaz/img/21.jpg', texto: 'Clase Magistral de Yoga: Encuentra tu equilibrio.' },
    { imagen: '../NicoleDiaz/img/22.jpg', texto: 'Reto de Fuerza: Supera tus límites.' },
    { imagen: '../NicoleDiaz/img/23.jpg', texto: 'Zumbathon: Baila hacia la salud.' },
    { imagen: '../NicoleDiaz/img/24.jpg', texto: 'Seminario de Nutrición: Come inteligente.' }
];

// Función para crear un elemento a partir de un template
function crearElementoDesdeTemplate(templateId, datos) {
    const template = document.getElementById(templateId);
    const clon = template.content.cloneNode(true);

    // Personaliza el clon con los datos
    Object.entries(datos).forEach(([key, value]) => {
        const elemento = clon.querySelector(`[${key}]`);
        if (elemento) {
            if (key === 'src') {
                elemento.setAttribute(key, value);
            } else {
                elemento.textContent = value;
            }
        }
    });

    return clon;
}

// Función para configurar el carrusel
function configurarCarruselEventos() {
    const carrusel = document.getElementById('eventos-carrusel');
    const carruselNav = document.querySelector('.carrusel-nav');
    let currentIndex = 0;

    // Añadir eventos al carrusel
    eventos.forEach((evento, index) => {
        const eventoElement = crearElementoDesdeTemplate('evento-template', {
            src: evento.imagen,
            textContent: evento.texto
        });
        eventoElement.firstElementChild.classList.toggle('active', index === 0);
        carrusel.appendChild(eventoElement);

        // Añadir dot al nav
        const dot = crearElementoDesdeTemplate('dot-template', {});
        dot.firstElementChild.classList.toggle('active', index === 0);
        dot.firstElementChild.addEventListener('click', () => cambiarEvento(index));
        carruselNav.appendChild(dot);
    });

    function cambiarEvento(index) {
        const eventosElements = carrusel.querySelectorAll('.evento');
        const dots = carruselNav.querySelectorAll('.carrusel-dot');

        eventosElements[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        eventosElements[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // Cambiar evento automáticamente cada 5 segundos
    setInterval(() => {
        cambiarEvento((currentIndex + 1) % eventos.length);
    }, 5000);
}

// Iniciar el carrusel cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', configurarCarruselEventos);
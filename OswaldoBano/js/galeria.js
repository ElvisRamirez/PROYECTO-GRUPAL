class GaleriaSection extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.images = []; // Array para almacenar las imágenes
        this.currentImageIndex = 0; // Índice de la imagen actual
        this.animationInterval = null; // Referencia al intervalo de animación
        this.interval = 5000; // Intervalo de tiempo en milisegundos
    }

    connectedCallback() {
        const template = document.getElementById('galeria-template').content.cloneNode(true);
        const numText = this.getAttribute('data-num-text') || '02';
        const experienceText = this.getAttribute('data-experience-text') || '';
        const titleText = this.getAttribute('data-title-text') || 'GALERIA';

        template.querySelector('.numero').innerText = numText;
        template.querySelector('.frase').innerText = experienceText;
        template.querySelector('.info h2').innerText = titleText;

        // Obtener contenedor de galería
        const galleryContainer = template.querySelector('.galeria-container');

        // Obtener imágenes y agregarlas al contenedor de galería
        this.images = Array.from(this.querySelectorAll('img'));
        this.images.forEach((img) => {
            const col = document.createElement('div');
            col.classList.add('col');
            col.appendChild(img.cloneNode(true));
            galleryContainer.appendChild(col);
        });

        // Duplicar imágenes para crear un bucle infinito
        this.images.forEach((img) => {
            const col = document.createElement('div');
            col.classList.add('col');
            col.appendChild(img.cloneNode(true));
            galleryContainer.appendChild(col);
        });

        // Agregar el contenido del template al shadow DOM
        this.shadowDOM.appendChild(template);

        // Agregar estilos
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');
            @import url('estilo.css');
            .galeria-container {
                display: flex;
                width: calc(100% * ${this.images.length * 2 }); 
                transition: transform 2s ease; 
            }
            .col {
                flex:0 0 auto;
                width: calc(100% / ${this.images.length });
            }
        `;
        this.shadowDOM.appendChild(style);

        // Iniciar la animación
        this.startAnimation();
    }

    // Función para iniciar la animación
    startAnimation() {
        // Iniciar la animación solo si hay más de una imagen
        if (this.images.length > 1) {
            this.animationInterval = setInterval(() => {
                this.showNextImage();
            }, this.interval);
        }
    }

    // Función para mostrar la siguiente imagen
    showNextImage() {
        // Incrementar el índice de la imagen actual
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

        // Calcular la posición de la imagen actual
        const newPosition = -this.currentImageIndex * (100 / this.images.length);

        // Aplicar la transformación CSS para mover la galería
        this.shadowDOM.querySelector('.galeria-container').style.transform = `translateX(${newPosition}%)`;
    }

    // Limpiar el intervalo cuando el componente es desconectado
    disconnectedCallback() {
        clearInterval(this.animationInterval);
    }
}

window.customElements.define('galeria-section', GaleriaSection);

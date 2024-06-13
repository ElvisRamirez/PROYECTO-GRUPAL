// Define una clase 'ScrollToTop' que extiende de 'HTMLElement'
class ScrollToTop extends HTMLElement {
    // El constructor se llama cuando se crea una instancia de la clase
    constructor() {
        super();
        // Obtiene el contenido del template con el id 'scrollToTopTemplate'
        const template = document.getElementById('scrollToTopTemplate').content;
        // Crea un Shadow DOM abierto
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // Clona el contenido del template y lo añade al Shadow DOM
        shadowRoot.appendChild(template.cloneNode(true));

        // Obtiene el botón de scroll-to-top dentro del Shadow DOM
        this.scrollToTopBtn = shadowRoot.getElementById('scrollToTopBtn');
        // Añade un event listener para el evento 'click' en el botón de scroll-to-top
        this.scrollToTopBtn.addEventListener('click', () => this.scrollToTop());
        
        // Añade estilos al Shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            #scrollToTopBtn {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: none;
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 50%;
                font-size: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: opacity 0.4s, transform 0.4s;
                z-index: 1000;
            }

            #scrollToTopBtn.show {
                display: block;
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }

            #scrollToTopBtn.hide {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
        `;
        shadowRoot.appendChild(style);
    }

    // Se llama cuando el elemento se inserta en el documento
    connectedCallback() {
        // Añade un event listener para el evento 'scroll' en la ventana
        window.addEventListener('scroll', this.toggleButtonVisibility.bind(this));
    }

    // Se llama cuando el elemento se elimina del documento
    disconnectedCallback() {
        // Elimina el event listener para el evento 'scroll' en la ventana
        window.removeEventListener('scroll', this.toggleButtonVisibility.bind(this));
    }

    // Método para alternar la visibilidad del botón de scroll-to-top
    toggleButtonVisibility() {
        // Si el scroll vertical es mayor a 300 píxeles, muestra el botón
        if (window.scrollY > 300) {
            this.scrollToTopBtn.classList.add('show');
            this.scrollToTopBtn.classList.remove('hide');
        } else { // Si no, oculta el botón
            this.scrollToTopBtn.classList.remove('show');
            this.scrollToTopBtn.classList.add('hide');
        }
    }

    // Método para desplazar la ventana hacia arriba
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Define el nuevo custom element 'scroll-to-top' usando la clase 'ScrollToTop'
customElements.define('scroll-to-top', ScrollToTop);

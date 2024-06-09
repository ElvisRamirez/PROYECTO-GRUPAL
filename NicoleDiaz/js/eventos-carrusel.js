class EventosCarrusel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.eventos = [
            { imagen: '../img/20.jpg', texto: 'Maratón Benéfica: Corre por una causa.' },
            { imagen: '../img/21.jpg', texto: 'Clase Magistral de Yoga: Encuentra tu equilibrio.' },
            { imagen: '../img/22.jpg', texto: 'Reto de Fuerza: Supera tus límites.' },
            { imagen: '../img/23.jpg', texto: 'Zumbathon: Baila hacia la salud.' },
            { imagen: '../img/24.jpg', texto: 'Seminario de Nutrición: Come inteligente.' }
        ];
        this.currentIndex = 0;
        this.render();
    }

    render() {
        const style = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    height: 400px;
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .carrusel-item {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .carrusel-item.active {
                    opacity: 1;
                }
                .carrusel-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .carrusel-texto {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: #fff;
                    padding: 15px;
                    border-radius: 5px;
                    font-size: 1.2em;
                    text-align: center;
                }
                .carrusel-nav {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                }
                .carrusel-dot {
                    width: 12px;
                    height: 12px;
                    background-color: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    margin: 0 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .carrusel-dot.active {
                    background-color: #fff;
                }
            </style>
        `;

        const html = `
            ${this.eventos.map((evento, index) => `
                <div class="carrusel-item ${index === this.currentIndex ? 'active' : ''}">
                    <img src="${evento.imagen}" alt="Evento ${index + 1}">
                    <div class="carrusel-texto">${evento.texto}</div>
                </div>
            `).join('')}
            <div class="carrusel-nav">
                ${this.eventos.map((_, index) => `
                    <div class="carrusel-dot ${index === this.currentIndex ? 'active' : ''}" data-index="${index}"></div>
                `).join('')}
            </div>
        `;

        this.shadowRoot.innerHTML = `${style}${html}`;

        this.shadowRoot.querySelectorAll('.carrusel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.currentIndex = parseInt(dot.dataset.index);
                this.render();
            });
        });

        setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.eventos.length;
            this.render();
        }, 5000);
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('eventos-carrusel', EventosCarrusel);
// Define una clase 'MyTag' que extiende de 'HTMLElement'
class MyTag extends HTMLElement {
    // El constructor se llama cuando se crea una instancia de la clase
    constructor() {
        super();
        // Se adjunta un Shadow DOM abierto a este elemento
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    // Especifica los atributos que debe observar el elemento
    static get observedAttributes() {
        return ['text', 'edge', 'radius', 'image', 'subtitle', 'description1', 'description2', 'description3'];
    }

    // Se llama cuando el elemento se inserta en el documento
    connectedCallback() {
        this.render();
    }

    // Se llama cuando un atributo observado cambia
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    // Renderiza el contenido del Shadow DOM
    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    // Devuelve el template HTML del componente
    template() {
        // Obtiene los atributos del elemento o usa valores por defecto
        const text = this.getAttribute('text') || '';
        const image = this.getAttribute('image') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const descriptions = [];

        // Recolecta las descripciones 1, 2 y 3, si están presentes
        for (let i = 1; i <= 3; i++) {
            const description = this.getAttribute(`description${i}`);
            if (description) {
                descriptions.push(description);
            }
        }

        // Genera el HTML para las descripciones
        const descriptionsHTML = descriptions.map(description => `<p>${description}</p>`).join('');

        // Devuelve el template HTML del componente
        return `
            <div class="tag">
                <div class="exercise-img">
                    <img src="${image}" alt="exercise image" class="img-fluid" />
                </div>
                <div class="exercise-description">
                    <h2>${subtitle}</h2>
                    ${descriptionsHTML}
                </div>
                <p>${text}</p>
            </div>
        `;
    }

    // Devuelve el template CSS del componente
    templateCss() {
        // Obtiene los atributos 'edge' y 'radius' o usa valores por defecto
        const edge = this.getAttribute('edge') || 'none';
        const radius = this.getAttribute('radius') || '0';

        // Devuelve el template CSS del componente
        return `
            <style>
                .tag {
                    border: 2px solid ${edge};
                    border-radius: ${radius}px;
                    padding: 10px;
                    display: inline-block;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    cursor: pointer;
                }
                .exercise-img {
                    position: relative;
                    overflow: hidden;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: ${radius}px;
                    transition: transform 0.3s ease;
                }
                img:hover {
                    transform: scale(1.1);
                }
                .exercise-description {
                    margin-top: 10px;
                }
                h2 {
                    margin: 0;
                    font-size: 1.2em;
                }
                p {
                    margin: 10px 0 0 0;
                    font-family: Arial, sans-serif;
                }
            </style>
        `;
    }
}

// Define el nuevo custom element 'my-tag' usando la clase 'MyTag'
window.customElements.define('my-tag', MyTag);

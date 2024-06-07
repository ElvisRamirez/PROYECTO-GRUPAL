class SuperHeader extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.defaultBackground = 'linear-gradient(rgba(0, 1, 3, 0.5), rgba(0,0,0,.7)),url(\'img/fondo.jpg\')';
    }

    connectedCallback() {
        this.render();
        this.addOptionClickEvent();
    }

    render() {
        const title = this.getAttribute('data-title') || '';
        const highlight = this.getAttribute('data-highlight') || '';
        const description = this.getAttribute('data-description') || '';
        const options = this.getAttribute('data-options') || '';

        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" crossorigin="anonymous" />
            <link rel="stylesheet" href="estilo.css">
            <section id="inicio" class="inicio" style="background-image: ${this.defaultBackground}">
                <div class="contenido-seccion">
                    <div class="info">
                        <h2>${title} <span class="txtRojo">${highlight}</span></h2>
                        <p>${description}</p>
                    </div>
                    <div class="opciones">
                        ${this.renderOptions(options)}
                    </div>
                </div>
            </section>
        `;
    }

    renderOptions(options) {
        if (!options) return '';
        const optionItems = options.split(',');
        return optionItems.map((option, index) => `<a href="#${option.trim().toLowerCase()}" class="opcion">${(index + 1).toString().padStart(2, '0')}.${option.trim()}</a>`).join('');
    }

    addOptionClickEvent() {
        const options = this.shadowDOM.querySelectorAll('.opcion');
        options.forEach(option => {
            option.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedOption = event.target.innerText.split('.')[1].trim().toLowerCase();
                this.changeBackground(selectedOption);
            });
        });
    }

    changeBackground(option) {
        const inicioElement = this.shadowDOM.querySelector('.inicio');
        const newBackgroundImage = `linear-gradient(rgba(0, 1, 3, 0.5), rgba(0,0,0,.7)),url('img/seccion/${option}.jpg')`;
        

        const transitionDiv = document.createElement('div');
        transitionDiv.style.width = '100%';
        transitionDiv.style.height = '100%';
        transitionDiv.style.position = 'absolute';
        transitionDiv.style.top = '0';
        transitionDiv.style.left = '100%'; // Empieza fuera de la vista por la derecha
        transitionDiv.style.backgroundImage = newBackgroundImage;
        transitionDiv.style.backgroundSize = 'cover';
        transitionDiv.style.backgroundPosition = 'center';
        transitionDiv.style.transition = 'left 0.3s ease';

        // Agrega el div de transición al elemento inicio
        inicioElement.appendChild(transitionDiv);

        // Fuerza el reflujo para que la transición comience
        requestAnimationFrame(() => {
            transitionDiv.style.left = '0';
        });

        // Después de la transición, cambia la imagen de fondo y elimina el div de transición
        setTimeout(() => {
            inicioElement.style.backgroundImage = newBackgroundImage;
            inicioElement.removeChild(transitionDiv);
        }, 300); // Duración de la transición en milisegundos
    }
}

window.customElements.define('super-header', SuperHeader);

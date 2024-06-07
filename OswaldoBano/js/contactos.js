class SuperContacto extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const titulo = this.getAttribute('data-titulo') || '';
        const numero = this.getAttribute('data-numero') || '';
        const direccion = this.getAttribute('data-direccion') || '';
        const telefono = this.getAttribute('data-telefono') || '';
        const horario = this.getAttribute('data-horario') || '';

        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="estilo.css">
            <section class="contacto" id="contacto">
                <div class="contenido-seccion">
                    <div class="contenedor-titulo">
                        <div class="numero">${numero}</div>
                        <div class="info">
                            <span class="frase">${titulo}</span>
                            <h2>CONTACTO</h2>
                        </div>
                    </div>
                    <div class="fila">
                        <div class="col">
                            <input type="text" placeholder="Ingrese Email">
                        </div>
                        <div class="col">
                            <input type="text" placeholder="Ingrese Nombre">
                        </div>
                    </div>
                    <div class="mensaje">
                        <textarea cols="30" rows="10" placeholder="Ingresa el Mensaje"></textarea>
                        <button>Enviar Mensaje</button>
                    </div>
                    <div class="fila-datos">
                        <div class="col">
                            <i class="fa-solid fa-location-dot"></i>
                            ${direccion}
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-phone"></i>
                            ${telefono}
                        </div>
                        <div class="col">
                            <i class="fa-regular fa-clock"></i>
                            ${horario}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

window.customElements.define('super-contacto', SuperContacto);

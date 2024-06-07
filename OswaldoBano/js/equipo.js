class SuperEquipo extends HTMLElement {
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
        const miembros = this.getAttribute('data-miembros') || '';
        const redes = this.getAttribute('data-redes') || '';

        const miembrosArray = miembros.split(';');
        const redesArray = redes.split(';');

        if (miembrosArray.length !== redesArray.length) {
            console.error('La cantidad de elementos en data-miembros y data-redes no coincide.');
            return;
        }

        const equipoHTML = miembrosArray.map((miembro, index) => {
            const [nombre, imagen, descripcion] = miembro.split(',');
            const [facebook, twitter, whatsapp] = redesArray[index].split(',');
            return `
                <div class="col">
                    <img src="${imagen}" alt="" width=95% height=50%>
                    <div class="info">
                        <h2>${nombre}</h2>
                        <p>${descripcion}</p>
                        <a href="${facebook}">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="${twitter}">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="${whatsapp}">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="estilo.css">
            <section class="equipo" id="equipo">
                <div class="contenido-seccion">
                    <div class="contenedor-titulo">
                        <div class="numero">${numero}</div>
                        <div class="info">
                            <span class="frase">${titulo}</span>
                            <h2>EQUIPO</h2>
                        </div>
                    </div>
                    <div class="fila">
                        ${equipoHTML}
                    </div>
                </div>
            </section>
        `;
    }
}

window.customElements.define('super-equipo', SuperEquipo);

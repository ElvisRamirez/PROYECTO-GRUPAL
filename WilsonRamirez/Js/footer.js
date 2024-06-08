class SuperFooter extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const year = this.getAttribute('data-year') || '2023';
        const company = this.getAttribute('data-company') || 'THE GYM';
        const redes = this.getAttribute('data-redes') || '';

        const redesItems = redes.split(',').map(item => {
            const [name, url] = item.split('|');
            return `<a href="${url.trim()}"><i class="fa-brands fa-${name.trim()}"></i></a>`;
        }).join('');

        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="estilosP.css">
            <footer>
                <div class="info">
                    <p>${year} - <span class="txtRojo">${company}</span> Todos los derechos reservados</p>
                    <div class="redes">
                        ${redesItems}
                    </div>
                </div>
            </footer>
        `;
    }
}

window.customElements.define('super-footer', SuperFooter);

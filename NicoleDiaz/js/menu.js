class SuperNav extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        // Seleccionar el contenedor del header para scroll handling
        this.headerElement = this.shadowDOM.querySelector('.contenedor-header');
        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > this.lastScrollTop) {
            // Desplazamiento hacia abajo
            this.headerElement.classList.add('hidden');
        } else {
            // Desplazamiento hacia arriba
            this.headerElement.classList.remove('hidden');
        }
        this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Evitar valores negativos
    }

    render() {
        const navItems = this.getAttribute('data-nav-items') || '';
        const navLinks = this.getAttribute('data-nav-links') || '';
        const redesItems = this.getAttribute('data-redes-items') || '';
        const textThe = this.getAttribute('data-text-the') || '';
        const textGym = this.getAttribute('data-text-gym') || '';

        const navItemsArray = navItems.split(',');
        const navLinksArray = navLinks.split(',');

        // Verificar que haya la misma cantidad de elementos en navItems y navLinks
        if (navItemsArray.length !== navLinksArray.length) {
            console.error('La cantidad de elementos en data-nav-items y data-nav-links no coincide.');
            return;
        }

        const navHTML = navItemsArray.map((item, index) => {
            const link = navLinksArray[index].trim();
            return `<a href="${link}">${item.trim()}</a>`;
        }).join('');

        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="estilo.css">
            <div class="contenedor-header">
                <header>
                    <h1>${textThe} <span class="txtRojo">${textGym}</span></h1>
                    <nav id="nav">${navHTML}</nav>
                    <div class="redes">
                        ${this.renderRedesItems(redesItems)}
                    </div>                
                </header>
            </div>
        `;
    }

    renderRedesItems(items) {
        if (!items) return '';

        const redesItems = items.split(',');
        return redesItems.map(item => {
            const [name, url] = item.split('|');
            return `<a href="${url.trim()}" target="_blank"><i class="fa-brands fa-${name.trim()}"></i></a>`;
        }).join('');
    }
}

window.customElements.define('super-nav', SuperNav);

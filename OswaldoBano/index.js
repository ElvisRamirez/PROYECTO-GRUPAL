import { animateCarousel } from './EsModules.js';

class SuperTag extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initCarousel();
    }

    render() {
        const navBackgroundColor = this.getAttribute('nav-background-color') || '';
        const navColor = this.getAttribute('nav-color') || '';
        const navItems = this.getAttribute('nav-items') || '';

        const carouselImages = this.getAttribute('carousel-images') || '';
        const carouselInterval = this.getAttribute('carousel-interval') || '5000'; // Valor predeterminado: 5 segundos

        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="stiles.css">
            <link rel="stylesheet" href="css/bootstrap.css">
            <div class="container">
                ${this.renderNav(navBackgroundColor, navColor, navItems)}
                <div class="carousel-container">
                    ${this.renderCarousel(carouselImages)}
                </div>
            </div>
        `;
    }

    renderNav(backgroundColor, color, items) {
        return `
            <nav style="background-color: ${backgroundColor}; color: ${color};">
                <ul class="nav">
                    ${this.renderNavItems(items)}
                </ul>
            </nav>
        `;
    }

    renderNavItems(items) {
        if (!items) return '';

        const navItems = items.split(',');
        return navItems.map(item => `<li class="nav-item"><a class="nav-link" href="#">${item.trim()}</a></li>`).join('');
    }

    renderCarousel(images) {
        if (!images) return '';

        const carouselImages = images.split(',');
        const carouselInnerHtml = carouselImages.map((image, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${image.trim()}" class="d-block w-100" alt="Slide ${index + 1}">
            </div>
        `).join('');

        return `
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${carouselInnerHtml}
                </div>
            </div>
        `;
    }

    initCarousel() {
        const carouselContainer = this.shadowDOM.querySelector('.carousel-container');
        const carousel = carouselContainer.querySelector('.carousel');
        animateCarousel(carousel, 1000); // Cambio automático cada 5 segundos
    }
}

class SuperNavItem extends HTMLElement {
    constructor() {
        super();
    }
}

window.customElements.define('super-tag', SuperTag);
window.customElements.define('super-nav-item', SuperNavItem);

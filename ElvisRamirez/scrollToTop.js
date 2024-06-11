class ScrollToTop extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('scrollToTopTemplate').content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.cloneNode(true));

        this.scrollToTopBtn = shadowRoot.getElementById('scrollToTopBtn');
        this.scrollToTopBtn.addEventListener('click', () => this.scrollToTop());
        
        // Adding styles to shadow DOM
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

    connectedCallback() {
        window.addEventListener('scroll', this.toggleButtonVisibility.bind(this));
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.toggleButtonVisibility.bind(this));
    }

    toggleButtonVisibility() {
        if (window.scrollY > 300) {
            this.scrollToTopBtn.classList.add('show');
            this.scrollToTopBtn.classList.remove('hide');
        } else {
            this.scrollToTopBtn.classList.remove('show');
            this.scrollToTopBtn.classList.add('hide');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

customElements.define('scroll-to-top', ScrollToTop);

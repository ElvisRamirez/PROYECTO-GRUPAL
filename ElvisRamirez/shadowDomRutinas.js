class MyTag extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['text', 'color', 'edge', 'radius', 'background', 'image', 'description'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        const text = this.getAttribute('text') || '';
        const image = this.getAttribute('image') || '';
        const description = this.getAttribute('description') || '';

        return `
            <div class="tag">
                <div class="exercise-img">
                    <img src="${image}" alt="exercise image" class="img-fluid" data-toggle="modal" data-target="#exerciseModal" />
                    <div class="exercise-description">${description}</div>
                </div>
                <p>${text}</p>
            </div>
        `;
    }

    templateCss() {
        const color = this.getAttribute('color') || 'inherit';
        const edge = this.getAttribute('edge') || 'none';
        const radius = this.getAttribute('radius') || '0';
        const background = this.getAttribute('background') || 'transparent';

        return `
            <style>
                .tag {
                    color: ${color};
                    border: 2px solid ${edge};
                    border-radius: ${radius}px;
                    background-color: ${background};
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
                .exercise-description {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    color: white;
                    padding: 5px;
                    display: none;
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
                p {
                    margin: 10px 0 0 0;
                }
            </style>
        `;
    }
}

window.customElements.define('my-tag', MyTag);

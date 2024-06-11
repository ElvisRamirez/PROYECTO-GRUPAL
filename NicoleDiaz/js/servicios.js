class ServiciosImg extends HTMLElement {
    constructor() {
        super();

        // Creamos el shadow DOM
        this.attachShadow({ mode: 'open' });

        // Definimos el HTML inicial dentro del shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
            
                :host {
                    display: block;
                    position: relative;
                    width: 380px;
                    height: 230px;
                    overflow: hidden;
                }
                .image-container {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    position: absolute;
                    border-radius: 2%;
                }
                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                .text-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    pointer-events: none;
                    text-align: center;
                }
                .additional-images {
                    position: absolute;
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    width: 50%;
                    height: 35%;
                    display: flex;
                    justify-content: center;
                    transition: top 0.7s ease, bottom 0.7s ease;
                }
                .additional-images img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 5%;
                    transition: transform 0.3s ease;
                    cursor: pointer;
                }
                .additional-images img:hover {
                    transform: scale(1.1);
                }
                .additional-images.top {
                    top: -100px; /* Initially hidden */
                }
                .additional-images.bottom {
                    bottom: -100px; /* Initially hidden */
                }
                .enlarged-image-container {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    z-index: 1000;
                    justify-content: center;
                    align-items: center;
                }
                .enlarged-image-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height:45%;
                    padding: 10px;
                }
                .enlarged-image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 2%;
                }
            </style>
            <div class="image-container">
                <img src="" alt="Image 1">
                <div class="text-overlay"></div>
            </div>
            <div class="additional-images top">
                <img src="" alt="Image 2">
            </div>
            <div class="additional-images bottom">
                <img src="" alt="Image 3">
            </div>
            <div class="enlarged-image-container">
                <div class="enlarged-image-wrapper">
                    <img class="enlarged-image" src="" alt="Enlarged Image">
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const mainImage = this.shadowRoot.querySelector('.image-container img');
        const textOverlay = this.shadowRoot.querySelector('.text-overlay');
        const additionalImagesTop = this.shadowRoot.querySelector('.additional-images.top');
        const additionalImagesBottom = this.shadowRoot.querySelector('.additional-images.bottom');
        const enlargedImageContainer = this.shadowRoot.querySelector('.enlarged-image-container');
        const enlargedImage = this.shadowRoot.querySelector('.enlarged-image');

        mainImage.src = this.getAttribute('image1');
        textOverlay.textContent = this.getAttribute('text') || '';
        additionalImagesTop.querySelector('img').src = this.getAttribute('image2');
        additionalImagesBottom.querySelector('img').src = this.getAttribute('image3');

        this.addEventListener('mouseenter', () => {
            additionalImagesTop.style.top = '0';
            additionalImagesBottom.style.bottom = '0';
        });
        this.addEventListener('mouseleave', () => {
            additionalImagesTop.style.top = '-100px';
            additionalImagesBottom.style.bottom = '-100px';
        });
        additionalImagesTop.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                enlargedImage.src = event.target.src;
                enlargedImageContainer.style.display = 'flex';
            }
        });
        additionalImagesBottom.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                enlargedImage.src = event.target.src;
                enlargedImageContainer.style.display = 'flex';
            }
        });

        enlargedImageContainer.addEventListener('click', (event) => {
            if (event.target === enlargedImageContainer) {
                enlargedImageContainer.style.display = 'none';
            }
        });
    }
}

customElements.define('servicios-img', ServiciosImg);

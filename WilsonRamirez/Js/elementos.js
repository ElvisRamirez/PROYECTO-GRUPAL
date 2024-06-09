class CardC extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const Imag = this.getAttribute("data-imag") || "";
    const Name = this.getAttribute("data-name") || "";
    const Info = this.getAttribute("data-info") || "";

    this.shadowDOM.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        <link rel="stylesheet" href="estilosP.css" />
        <style>
          .card {
              border: 4px solid black;
              background-color: #212122;
              width: 18rem;
              align-items: center;
              padding-top: 10px;
              color: white;
          }
  
          .card-img-top {
              border: 3px solid black;
              border-radius: 50%;
              height: 250px;
              width: 250px;
              object-fit: cover;
          }
        </style>
        <div class="container mt-5">
          <div class="card">
            <img src="${Imag}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${Name}</h5>
              <p class="card-text">${Info}</p>
            </div>
          </div>
        </div>
      `;
  }
}

window.customElements.define("super-tarjeta", CardC);

class Fondo extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const ruta = this.getAttribute("data-ruta") || "";

    this.shadowDOM.innerHTML = `
        <style>
          .seccion {
            background-image: url("${ruta}");
            position: relative;
            padding: 100px 20px; /* Padding ajustado */
            display: flex;
            flex-direction: row;
            gap: 20px; /* Espacio entre los elementos */
            justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center; /* Centra los elementos verticalmente */
          }
        </style>
        <section class="seccion">
          <slot></slot>
        </section>
      `;
  }
}

window.customElements.define("super-seccion", Fondo);


class Carousel extends HTMLElement {
  constructor() {
    super();
    // Creamos un elemento div para contener el template
    this.container = document.createElement('div');
    this.container.style.width = '600px';
    this.container.style.height = '400px';
  }

  connectedCallback() {
    // Clonamos el template para cada instancia
    const template = document.getElementById('carousel-template');
    const content = template.content.cloneNode(true);
    
    // Modificamos las imágenes en el contenido clonado
    const carouselItems = content.querySelectorAll('.carousel-item img');
    carouselItems[0].src = this.getAttribute('image1') || '';
    carouselItems[1].src = this.getAttribute('image2') || '';
    carouselItems[2].src = this.getAttribute('image3') || '';
    
    // Agregamos el contenido modificado al contenedor
    this.container.appendChild(content);
    
    // Agregamos el contenedor al DOM
    this.appendChild(this.container);
  }
}

customElements.define('super-carousel', Carousel);


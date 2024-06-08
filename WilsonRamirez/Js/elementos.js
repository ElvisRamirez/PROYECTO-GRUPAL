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
            padding-top: 100px;
            padding-bottom: 120px;
            
            background-size: cover;
            
          }
        </style>
        <section class="seccion">
          <slot></slot>
        </section>
      `;
  }
}

window.customElements.define("super-seccion", Fondo);

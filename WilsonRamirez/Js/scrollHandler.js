let lastScrollTop = 0;
const headerElement = document.querySelector(".contenedor-header");

function handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
        // Desplazamiento hacia abajo
        headerElement.classList.add("hidden");
    } else {
        // Desplazamiento hacia arriba
        headerElement.classList.remove("hidden");
    }

}

export { handleScroll };
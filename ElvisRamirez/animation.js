// animation.js
export function showZebraStripes() {
    const zebraContainer = document.getElementById('zebra-container');
    const containerWidth = zebraContainer.offsetWidth;
    const stripeHeight = 30; // Altura de cada franja
    const totalStripes = Math.ceil(containerWidth / stripeHeight); // Número total de franjas

    // Función para animar cada franja
    function animateStripe(stripe, index) {
        setTimeout(() => {
            stripe.style.opacity = '1'; // Hacer visible la franja
        }, index * 50); // Ajusta la velocidad de la animación según sea necesario
    }

    // Mostrar gradualmente las franjas como una cebra
    for (let i = 0; i < totalStripes; i++) {
        const stripe = document.createElement('div');
        stripe.className = 'zebra-stripe';
        stripe.style.width = '100%';
        stripe.style.height = stripeHeight + 'px';
        stripe.style.background = i % 2 === 0 ? 'black' : 'white'; // Alternar colores de franjas
        stripe.style.position = 'absolute';
        stripe.style.top = `${i * stripeHeight}px`;
        stripe.style.opacity = '0'; // Ocultar la franja inicialmente
        zebraContainer.appendChild(stripe);
        animateStripe(stripe, i);
    }
}

function showZebraStripes() {
    const zebraContainer = document.getElementById('zebra-container');
    const containerWidth = zebraContainer.offsetWidth;
    const stripeHeight = 30; // Altura de cada franja
    const totalStripes = Math.ceil(containerWidth / stripeHeight); // Número total de franjas

    // Función para animar cada franja
    function animateStripe(stripe, index) {
        setTimeout(() => {
            stripe.style.opacity = '1'; // Hacer visible la franja
            if (index < totalStripes - 1) {
                const nextStripe = document.createElement('div');
                nextStripe.className = 'zebra-stripe';
                nextStripe.style.width = '100%';
                nextStripe.style.height = stripeHeight + 'px';
                const grayscaleValue = Math.round(((index + 1) / totalStripes) * 255); // Calcula el valor de escala de grises
                nextStripe.style.background = `rgb(${grayscaleValue}, ${grayscaleValue}, ${grayscaleValue})`; // Establece el color de fondo en escala de grises
                nextStripe.style.position = 'absolute';
                nextStripe.style.top = `${(index + 1) * stripeHeight}px`;
                nextStripe.style.opacity = '0'; // Ocultar la franja inicialmente
                zebraContainer.appendChild(nextStripe);
                animateStripe(nextStripe, index + 1);
            }
        }, index * 5); // Ajusta la velocidad de la animación según sea necesario
    }

    // Mostrar gradualmente las franjas como una cebra
    const firstStripe = document.createElement('div');
    firstStripe.className = 'zebra-stripe';
    firstStripe.style.width = '100%';
    firstStripe.style.height = stripeHeight + 'px';
    firstStripe.style.background = 'rgb(255, 255, 255)'; // La primera franja será blanca
    firstStripe.style.position = 'absolute';
    firstStripe.style.top = '0';
    firstStripe.style.opacity = '0'; // Ocultar la franja inicialmente
    zebraContainer.appendChild(firstStripe);
    animateStripe(firstStripe, 0);
}
function showZebraStripes() {
    const zebraContainer = document.getElementById('zebra-container');
    const containerWidth = zebraContainer.offsetWidth;
    const stripeHeight = 100; // Altura de cada franja
    const totalStripes = Math.ceil(containerWidth / stripeHeight); // Número total de franjas

    // Función para animar cada franja
    function animateStripe(stripe, index) {
        setTimeout(() => {
            stripe.style.opacity = '1'; // Hacer visible la franja
            if (index < totalStripes - 1) {
                const nextStripe = document.createElement('div');
                nextStripe.className = 'zebra-stripe';
                nextStripe.style.width = '100%';
                nextStripe.style.height = stripeHeight + 'px';
                const grayscaleValue = Math.round(((index + 1) / totalStripes) * 255); // Calcula el valor de escala de grises
                nextStripe.style.background = `rgb(${grayscaleValue}, ${grayscaleValue}, ${grayscaleValue})`; // Establece el color de fondo en escala de grises
                nextStripe.style.position = 'absolute';
                nextStripe.style.top = `${(index + 1) * stripeHeight}px`;
                nextStripe.style.opacity = '0'; // Ocultar la franja inicialmente
                zebraContainer.appendChild(nextStripe);
                animateStripe(nextStripe, index + 1);
            }
        }, index * 15); // Ajusta la velocidad de la animación según sea necesario
    }

    // Mostrar gradualmente las franjas como una cebra
    const firstStripe = document.createElement('div');
    firstStripe.className = 'zebra-stripe';
    firstStripe.style.width = '100%';
    firstStripe.style.height = stripeHeight + 'px';
    firstStripe.style.background = 'rgb(255, 255, 255)'; // La primera franja será blanca
    firstStripe.style.position = 'absolute';
    firstStripe.style.top = '0';
    firstStripe.style.opacity = '0'; // Ocultar la franja inicialmente
    zebraContainer.appendChild(firstStripe);
    animateStripe(firstStripe, 0);
}

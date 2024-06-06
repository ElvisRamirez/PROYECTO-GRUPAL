export function animateCarousel(carouselContainer, interval) {
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const showNextItem = () => {
        const nextIndex = (currentIndex + 1) % carouselItems.length;

        carouselItems[currentIndex].classList.remove('active');
        carouselItems[nextIndex].classList.add('active');

        currentIndex = nextIndex;
    };

    setInterval(showNextItem, interval);
}

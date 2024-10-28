const carousel = document.getElementById('carousel');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let interval;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startCarousel() {
    interval = setInterval(showNextImage, 2000); // Changer toutes les 2 secondes
}

function stopCarousel() {
    clearInterval(interval);
}

carousel.addEventListener('mouseover', stopCarousel);
carousel.addEventListener('mouseout', startCarousel);

// Démarrer le carousel
startCarousel();

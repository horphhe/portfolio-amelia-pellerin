const carousel = document.getElementById('carousel');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let interval;

// Fonction pour afficher l'image suivante
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Démarrer le carousel avec un intervalle
function startCarousel() {
    interval = setInterval(showNextImage, 3000); // Changer toutes les 3 secondes
}

// Arrêter le carousel au survol
function stopCarousel() {
    clearInterval(interval);
}

// Événements de survol
carousel.addEventListener('mouseover', stopCarousel);
carousel.addEventListener('mouseout', startCarousel);

// Démarrer le carousel
startCarousel();

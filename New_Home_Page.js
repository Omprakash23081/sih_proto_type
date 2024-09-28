// // Sticky Header on Scroll
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     header.classList.toggle('scrolled', window.scrollY > 50);
// });

// // Smooth scroll for internal links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    // Use modulo operator to cycle through slides
    document.querySelector('.carousel-slide').style.transform = `translateX(${-index * (100 / totalSlides)}%)`;
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Wrap around to the first slide
    showSlide(currentSlide);
}

// Autoplay functionality
setInterval(nextSlide, 3000); // Change slide every 3 seconds




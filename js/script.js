let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}
function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}
function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}
setInterval(nextSlide, 3000); // Slide changes every 3 seconds
showSlide(currentSlide);

// Footer

const footer = document.getElementById('footer');
const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} Abdelkerim Abbo. Tous droits réservés.`;
footer.style.textAlign = 'center';
footer.style.padding = '10px';
footer.style.backgroundColor = '#333';
footer.style.color = 'white';
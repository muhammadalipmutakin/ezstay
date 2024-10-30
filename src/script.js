// Carosel
const slides = document.querySelectorAll('#carouselSlides > div');
let currentSlide = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides; // Loop through slides
    const offset = -currentSlide * 100; // Calculate offset for translation
    document.getElementById('carouselSlides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}



// Modal
prevButton.forEach(button => button.addEventListener("click", goToPreviousSlide));
nextButton.forEach(button => button.addEventListener("click", goToNextSlide));


function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modalImg.src = img.src; 
    modal.style.display = "flex"; 
}

function closeModal(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal || event.target.classList.contains("close")) {
        modal.style.display = "none";
    }
}
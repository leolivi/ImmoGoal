// Index Image Slider

const slides = document.querySelectorAll('.slide img');
let sliderIndex = 0;
const interval = 5000; 
let intervalId;

document.addEventListener("DOMContentLoaded" , initializeSlider); 

function initializeSlider() {
    if (slides.length > 0) {
        slides[sliderIndex].classList.add("displaySlide");
        startAutoplay();
    }

    document.getElementById("prev").addEventListener("click", prevSlide);
    document.getElementById("next").addEventListener("click", nextSlide);
}

function showSlide(index) {
    if (index >= slides.length) {
        sliderIndex = 0;
    } else if (index < 0) {
        sliderIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[sliderIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    sliderIndex--;
    showSlide(sliderIndex);
    startAutoplay(); 
}

function nextSlide() {
    clearInterval(intervalId);
    sliderIndex++;
    showSlide(sliderIndex);
    startAutoplay();
}

function startAutoplay() {
    clearInterval(intervalId); 
    intervalId = setInterval(nextSlide, interval);
}

startAutoplay();
let slides = document.querySelectorAll('.slide-container');
let index = 0;
let intervalId;

function changeSlide(newIndex) {
    clearInterval(intervalId); // Clear the interval when manually changing slide
    slides[index].classList.remove('active');
    index = newIndex;
    slides[index].classList.add('active');
    updateCircleNav();
    startAutoSlide();
}

function updateCircleNav() {
    document.querySelectorAll('.circle-nav').forEach((circle, i) => {
        circle.classList.remove('active');
        if (i === index) {
            circle.classList.add('active');
        }
    });
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        changeSlide((index + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
}

// Initial setup
updateCircleNav();
startAutoSlide();

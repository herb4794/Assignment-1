const slideImage = document.querySelectorAll(".header-slider .wrapper .slides-container .slide-image ");
const slidesContainer = document.querySelector(".header-slider .wrapper .slides-container");
const prevBtn = document.querySelector(".header-slider .wrapper .prev-btn");
const nextBtn = document.querySelector(".header-slider .wrapper .next-btn");
const navigationDots = document.querySelector(".header-slider .navigation-dots");

// Set up the slider

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

init();

function init(){
    /*
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");

    createNavigationDots();
}


// Create navigation dots
function createNavigationDots() {
    for (let i = 0 ; i < numberOfImages ; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);
        
        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }

    navigationDots.children[0].classList.add("active");
}

// Prev Button
prevBtn.addEventListener("click", () => {
    if ( currentSlide <= 0 ) {
        goToSlide(numberOfImages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
})

// Next Button
nextBtn.addEventListener("click", () => {
    if ( currentSlide >= numberOfImages - 1 ) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
})

// Got to Slide
function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

// Set Active Class

function setActiveClass() {
    // Set active class for Slide Image
    let currentActive = document.querySelector(".header-slider .wrapper .slides-container .slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    // set active class for navigation dots
    let currentDot = document.querySelector(".header-slider .navigation-dots .single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");

}

window.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = (e) => document.querySelector('body').className = e.target.dataset.langClass;
    const enableLangSwitcher = (elementId) => document
        .getElementById(elementId)
        .addEventListener('click', langSwitcher);

    enableLangSwitcher('enLangSwitcher');
    enableLangSwitcher('deLangSwitcher');


});


const slider = document.querySelector(".slider-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = Array.from(slider.querySelectorAll(".slide"));
let slideIndex = 0;

prev.addEventListener('click', showPrev);
next.addEventListener('click', showNext);

function showPrev() {

    if (slideIndex === 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = slideIndex - 1;
    }
    updateSlider();
}

function showNext() {

    if (slideIndex === slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex = slideIndex + 1;
    }
    updateSlider();
}


function updateSlider() {

    slides.map((slide, currentIndex) => {
        if (currentIndex === slideIndex) {

            slide.classList.add("active")
            console.log("active")
        } else {
            slide.classList.remove("active")
        }
    })
}




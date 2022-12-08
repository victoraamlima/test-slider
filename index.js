const slides = document.getElementsByClassName("slide")

let currentSlide = 0

let leftArrow = document.getElementsByClassName("left-arrow")
let rightArrow = document.getElementsByClassName("right-arrow")

function moveSlideRight() {
    if (currentSlide === slides.length - 1) {
        return
    }

    removeShow()

    currentSlide++

    addShow()

    if (currentSlide > 0) {
        leftArrow[0].classList.remove("opacity")
        leftArrow[0].classList.add("hover")
    }
    
    if (currentSlide === slides.length-1) {
        rightArrow[0].classList.add("opacity")
        rightArrow[0].classList.remove("hover")
    }
}

function addShow() {
    slides[currentSlide].classList.add("show")
}

function removeShow() {
    slides[currentSlide].classList.remove("show")
}

function moveSlideLeft() {
    if (currentSlide === 0) {
        return
    }

    removeShow()

    currentSlide--

    addShow()

    if (currentSlide < 1) {
        leftArrow[0].classList.add("opacity")
        leftArrow[0].classList.remove("hover")
    }

    if (currentSlide < slides.length-1) {
        rightArrow[0].classList.remove("opacity")
        rightArrow[0].classList.add("hover")
    }
}
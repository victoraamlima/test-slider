const slides = document.getElementsByClassName("slide")
const leftArrow = document.getElementsByClassName("left-arrow")
const rightArrow = document.getElementsByClassName("right-arrow")

let currentSlide = 0
const firstSlide = 0
const lastSlide = slides.length - 1

function addShow() {
  slides[currentSlide].classList.add("show")
}

function removeShow() {
  slides[currentSlide].classList.remove("show")
}

function handleArrowsDisabled() {
  if (currentSlide === firstSlide) {
    leftArrow[0].classList.add("disabled")
  } else {
    leftArrow[0].classList.remove("disabled")
  }

  if (currentSlide === lastSlide) {
    rightArrow[0].classList.add("disabled")
  } else {
    rightArrow[0].classList.remove("disabled")
  }
}

function moveSlideRight() {
  if (currentSlide === lastSlide) {
    return
  }

  removeShow()
  currentSlide++
  addShow()

  handleArrowsDisabled()
}

function moveSlideLeft() {
  if (currentSlide === firstSlide) {
    return
  }

  removeShow()
  currentSlide--
  addShow()

  handleArrowsDisabled()
}

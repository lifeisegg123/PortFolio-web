const leftSlideBtn = document.getElementById("jsLeftBtn");
const rightSlideBtn = document.getElementById("jsRightBtn");
const slides = document.querySelectorAll("#jsSlide");
const navBtn = document.querySelectorAll("#jsNavBtn");

const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];
const firstNavBtn = navBtn[0];
const lastNavBtn = navBtn[navBtn.length - 1];

function handleLeftBtn() {
  const currentSlide = document.querySelector(".contents__active");
  const currentNav = document.querySelector(".nav__active");
  if (currentSlide) {
    currentSlide.classList.remove("contents__active");
    let prev = currentSlide.previousElementSibling;
    if (prev) {
      prev.classList.add("contents__active");
    } else {
      lastSlide.classList.add("contents__active");
    }
  }
  if (currentNav) {
    currentNav.classList.remove("nav__active");
    prev = currentNav.parentElement.previousElementSibling;
    if (prev) {
      prev = prev.firstElementChild;
      prev.classList.add("nav__active");
    } else {
      lastNavBtn.classList.add("nav__active");
    }
  }
}
function handleRightBtn() {
  const currentSlide = document.querySelector(".contents__active");
  const currentNav = document.querySelector(".nav__active");
  if (currentSlide) {
    currentSlide.classList.remove("contents__active");
    let prev = currentSlide.nextElementSibling;
    if (prev) {
      prev.classList.add("contents__active");
    } else {
      firstSlide.classList.add("contents__active");
    }
  }
  if (currentNav) {
    currentNav.classList.remove("nav__active");
    prev = currentNav.parentElement.nextElementSibling;
    if (prev) {
      prev = prev.firstElementChild;
      prev.classList.add("nav__active");
    } else {
      firstNavBtn.classList.add("nav__active");
    }
  }
}

function init() {
  leftSlideBtn.addEventListener("click", handleLeftBtn);
  rightSlideBtn.addEventListener("click", handleRightBtn);
}

init();

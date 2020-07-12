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
      prev.classList.remove("contents__animation--right");
      prev.classList.add("contents__active");
      prev.classList.add("contents__animation--left");
    } else {
      lastSlide.classList.remove("contents__animation--right");
      lastSlide.classList.add("contents__active");
      lastSlide.classList.add("contents__animation--left");
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
    let next = currentSlide.nextElementSibling;

    if (next) {
      next.classList.remove("contents__animation--left");
      next.classList.add("contents__active");
      next.classList.add("contents__animation--right");
    } else {
      firstSlide.classList.remove("contents__animation--left");
      firstSlide.classList.add("contents__active");
      firstSlide.classList.add("contents__animation--right");
    }
  }
  if (currentNav) {
    currentNav.classList.remove("nav__active");
    next = currentNav.parentElement.nextElementSibling;
    if (next) {
      next = next.firstElementChild;
      next.classList.add("nav__active");
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

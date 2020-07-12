const navBtns = document.querySelectorAll("#jsNavBtn");

const whoIAmBtn = navBtns[0];
const abilityBtn = navBtns[1];
const worksBtn = navBtns[2];

function handleBtnClick() {
  const currentSlide = document.querySelector(".contents__active");
  const currentNav = document.querySelector(".nav__active");
  const targetStirng = event.target.innerText;
  if (currentSlide) {
    currentSlide.classList.remove("contents__active");
    const targetSlide = document.querySelector(`.js${targetStirng}`);
    targetSlide.classList.remove("contents__animation--right");
    targetSlide.classList.remove("contents__animation--left");
    targetSlide.classList.add("contents__active");
  }
  if (currentNav) {
    currentNav.classList.remove("nav__active");
    event.target.classList.add("nav__active");
  }
}

function init() {
  whoIAmBtn.addEventListener("click", handleBtnClick);
  abilityBtn.addEventListener("click", handleBtnClick);
  worksBtn.addEventListener("click", handleBtnClick);
}
init();

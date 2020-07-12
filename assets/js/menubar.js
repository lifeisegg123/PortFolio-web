const menuBtn = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".nav__list");

function init() {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

init();

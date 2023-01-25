const showQuestion = document.querySelector(".show-question");
const question = document.querySelector(".question");
const hamburger = document.querySelector(".b-hamburger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll('.nav-link');
let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

showQuestion.addEventListener("click", () => {
  question.classList.toggle("none");
});

btnNext.addEventListener("click", function () {
  if (viewSlide < 6) {
    viewSlide++;
  } else {
    viewSlide = 0;
  }
  slider.style.left = -viewSlide * viewport + "px";
});

btnPrev.addEventListener("click", function () {
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 6;
  }
  slider.style.left = -viewSlide * viewport + "px";
});

function closeMenu(event) {
  if (event.target.classList.contains("nav-link")) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("open");
  }
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("open");
});
navLinks.forEach((el) => el.addEventListener("click", closeMenu));

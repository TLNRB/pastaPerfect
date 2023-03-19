const nav = document.querySelector("#nav");
const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close-button");

darkMode.addEventListener("click", () => {
  lightMode.classList.add("button-is-active");
  darkMode.classList.add("button-isnot-active");
});

lightMode.addEventListener("click", () => {
  lightMode.classList.remove("button-is-active");
  darkMode.classList.remove("button-isnot-active");
});

hamburger.addEventListener("click", () => {
  nav.classList.add("is-active");
  darkMode.classList.add("button-isnot-active");
  hamburger.classList.add("button-isnot-active");
  closeButton.classList.add("button-is-active");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("is-active");
  darkMode.classList.remove("button-isnot-active");
  hamburger.classList.remove("button-isnot-active");
  closeButton.classList.remove("button-is-active");
});
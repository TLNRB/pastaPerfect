import recepies from "./recepies.js";

//========== Nav Bar JavaScript ==========
const nav = document.querySelector("#nav");
const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close-button");

//Light Mode On
darkMode.addEventListener("click", () => {
  lightMode.classList.add("button-is-active");
  darkMode.classList.add("button-isnot-active");
});

//Dark Mode On
lightMode.addEventListener("click", () => {
  lightMode.classList.remove("button-is-active");
  darkMode.classList.remove("button-isnot-active");
});

//Hamburger Menu Open
hamburger.addEventListener("click", () => {
  nav.classList.add("is-active");
  hamburger.classList.add("button-isnot-active");
  closeButton.classList.add("button-is-active");
});

//Hamburger Menu Close
closeButton.addEventListener("click", () => {
  nav.classList.remove("is-active");
  hamburger.classList.remove("button-isnot-active");
  closeButton.classList.remove("button-is-active");
});

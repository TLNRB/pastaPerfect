//========== Nav Bar JavaScript ==========
const nav = document.querySelector("#nav");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close-button");
//Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sun.classList.add("button-is-active");
    moon.classList.add("button-isnot-active");
    return;
  }
  sun.classList.remove("button-is-active");
  moon.classList.remove("button-isnot-active");
};

//Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    sun.classList.remove("button-is-active");
    moon.classList.remove("button-isnot-active");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  sun.classList.add("button-is-active");
  moon.classList.add("button-isnot-active");
};

//Light Mode On
moon.addEventListener("click", () => {
  themeSwitch();
});

//Dark Mode On
sun.addEventListener("click", () => {
  themeSwitch();
});

//Invoke Theme Check on Initial Load
themeCheck();

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

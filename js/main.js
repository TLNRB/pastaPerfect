//========== Nav Bar JavaScript ==========
const nav = document.querySelector("#nav");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close-button");
const logo = document.querySelector("#logo");
//Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sun.classList.add("button-is-active");
    moon.classList.add("button-isnot-active");
    logo.src = "images/icons8-spaghetti-light.png";
    return;
  }
  sun.classList.remove("button-is-active");
  moon.classList.remove("button-isnot-active");
  logo.src = "images/icons8-spaghetti-50.png";
};

//Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    sun.classList.remove("button-is-active");
    moon.classList.remove("button-isnot-active");
    logo.src = "images/icons8-spaghetti-50.png";
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  sun.classList.add("button-is-active");
  moon.classList.add("button-isnot-active");
  logo.src = "images/icons8-spaghetti-light.png";
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

//Scroll to active-link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionsClass = document.querySelector("#nav a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

import recepies from "./recepies.js";

//========== Recipe Display Section ==========
const cardContainer = document.querySelector("#card-container");

const displayRecepies = (recepies) => {
  if (recepies.length < 1) {
    cardContainer.innerHTML = `<h3 class="mx-auto text-[1.25rem] font-semibold">No recepies found</h3>`;
    return;
  }

  cardContainer.innerHTML = recepies
    .map((recepie) => {
      const { id, title, fullName, smallDescription, picture } = recepie;
      return `
    <div data-id="${id}" class="relative card-shadow z-[5] w-[14rem] h-[20rem] p-[1rem] bg-normalCardBG rounded-[20px] text-center sm:p-[1.5rem] sm:w-[18.75rem] dark:bg-dmNormalCardBG ">
      <img class="sm-img-shadow card-img-left absolute top-[-3.75rem] h-[10rem] sm:h-[11.25rem]" src="${picture}" alt="${fullName}">
      <h3 class="mt-[5.25rem] text-[1.25rem] font-bold pt-[1.25rem] pb-[1.25rem] sm:mt-[6rem] dark:text-dmLightText">${title}</h3>
      <p class="text-base">${smallDescription}</p>
      <a class="card-shadow absolute bottom-[-1rem] right-[-1rem] w-[3rem] h-[3rem] rounded-full bg-darkBrown cursor-pointer group hover:scale-110 transition-all ease-in-out dark:bg-dmDarkBrown" href="">
        <i class='bx bx-plus text-lightText text-[1.75rem] flex justify-center items-center translate-y-[40%] translate-x-[1%] group-hover:scale-110 transition-all ease-in-out'></i>
      </a>
    </div>
    `;
    })
    .join("");
};

displayRecepies(recepies);

//========== Dropdown BTN Section ==========
const filterDropdown = document.querySelector(".pasta-dropdown-btn");
const skillDropdown = document.querySelector(".skill-dropdown-btn");
const pastaOptions = document.querySelector(".pasta-options");
const skillLevel = document.querySelector(".skill-level");

filterDropdown.addEventListener("click", () => {
  filterDropdown.classList.toggle("active");
  pastaOptions.classList.toggle("active");
});

//========== Search Filter Section ==========
const form = document.querySelector("#input-form");
const searchInput = document.querySelector("#search-input");
const icon = document.querySelector(".icon");
let filteredRecepies = [...recepies];

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value.toLowerCase();

  filteredRecepies = recepies.filter((recepie) => {
    if (recepie.title.toLowerCase().includes(inputValue)) {
      return recepie;
    }
  });
  displayRecepies(filteredRecepies);
});

// When the user starts typing in the search field, hide the icon
searchInput.addEventListener("focus", () => {
  icon.style.display = "none";
});

// When the search field is out of focus, show the icon
searchInput.addEventListener("blur", () => {
  icon.style.display = "block";
});

skillDropdown.addEventListener("click", () => {
  skillDropdown.classList.toggle("active");
  skillLevel.classList.toggle("active");
});

//========== Filter and Display Section ==========
//========== Slider Filter Section ==========
const slider = document.querySelector(".slider");
const skill = document.querySelector(".skill");
const skillDropBtn = document.querySelector(".skill-dropdown-btn");

let skillFilter = "";

slider.addEventListener("input", () => {
  const value = Number(slider.value);

  if (value <= 25) {
    slider.value = 5;
    skill.innerHTML = "Easy";
  } else if (value <= 75) {
    slider.value = 50;
    skill.innerHTML = "Intermediate";
  } else {
    slider.value = 95;
    skill.innerHTML = "Hard";
  }
  skillFilter = skill.innerHTML;
});

//========== Pasta Type Filter Section ==========
const spaghetti = document.querySelector("#spaghetti");
const lasagna = document.querySelector("#lasagna");
const fettuccine = document.querySelector("#fettuccine");
const ravioli = document.querySelector("#ravioli");

let pastaFilter = [];

function checkFilters(value, id) {
  // Check if value is in array
  if (pastaFilter.includes(value)) {
    // If value is in array, remove it
    pastaFilter = pastaFilter.filter((item) => item !== value);
    if (document.documentElement.classList.contains("dark")) {
      id.style.backgroundColor = "#404040";
    } else {
      id.classList.remove("bg-active");
    }
  } else {
    // If value is not in array, add it
    pastaFilter.push(value);
    if (document.documentElement.classList.contains("dark")) {
      id.style.backgroundColor = "#5A4B3D";
    } else {
      id.classList.add("bg-active");
    }
  }
}

spaghetti.addEventListener("click", () => {
  checkFilters("Spaghetti", spaghetti);
});
lasagna.addEventListener("click", () => {
  checkFilters("Lasagne", lasagna);
});
fettuccine.addEventListener("click", () => {
  checkFilters("Fettuccine", fettuccine);
});
ravioli.addEventListener("click", () => {
  checkFilters("Ravioli", ravioli);
});

//========== Filter Section ==========
const filterBtn = document.querySelector("#filterButton");

filterBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.addEventListener("blur", () => {
    icon.style.display = "block";
  });

  const filteredRecepiesByBtn = recepies.filter((recepie) => {
    if (skillDropBtn.classList.contains("active")) {
      if (recepie.levelOfSkill === skillFilter) {
        if (pastaFilter.length != 0) {
          for (let i = 0; i < pastaFilter.length; i++) {
            if (recepie.pastaTypeName === pastaFilter[i]) {
              return recepie;
              break;
            } else {
              continue;
            }
          }
        } else {
          return recepie;
        }
      }
    } else if (pastaFilter.length != 0) {
      for (let i = 0; i < pastaFilter.length; i++) {
        if (recepie.pastaTypeName == pastaFilter[i]) {
          return recepie;
          break;
        } else {
          continue;
        }
      }
    } else {
      return recepie;
    }
  });
  displayRecepies(filteredRecepiesByBtn);
});

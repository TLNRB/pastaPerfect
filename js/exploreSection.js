import recepies from "./recepies.js";

//========== Recipe Display Section ==========
const cardContainer = document.querySelector("#card-container");

const displayRecepies = () => {
  if (recepies.length < 1) {
    cardContainer.innerHTML = `<h3 class="mx-auto">No recepies found</h3>`;
    return;
  }

  cardContainer.innerHTML = recepies
    .map((recepie) => {
      const { id, title, fullName, smallDescription, picture } = recepie;
      return `
    <div data-id="${id}" class="relative card-shadow z-[5] w-[14rem] h-[20rem] p-[1rem] bg-normalCardBG rounded-[20px] text-center sm:p-[1.5rem] sm:w-[18.75rem]">
      <img class="sm-img-shadow card-img-left absolute top-[-3.75rem] h-[10rem] sm:h-[11.25rem]" src="${picture}" alt="${fullName}">
      <h3 class="mt-[5.25rem] text-[1.25rem] font-bold pt-[1.25rem] pb-[1.25rem] sm:mt-[6rem]">${title}</h3>
      <p class="text-base">${smallDescription}</p>
      <a class="card-shadow absolute bottom-[-1rem] right-[-1rem] w-[3rem] h-[3rem] rounded-full bg-darkBrown cursor-pointer group hover:scale-110 transition-all ease-in-out" href="">
        <i class='bx bx-plus text-lightText text-[1.75rem] flex justify-center items-center translate-y-[40%] translate-x-[1%] group-hover:scale-110 transition-all ease-in-out'></i>
      </a>
    </div>
    `;
    })
    .join("");
};

displayRecepies();

//========== Slider Filter Section ==========
const slider = document.querySelector(".slider");
const skill = document.querySelector(".skill");

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
});

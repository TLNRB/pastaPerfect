import recepies from "./recepies.js";

//========== Popular Section JavaScript ==========
const cardContainer = document.querySelector("#card-container");

const popularRecepies = recepies.filter((recepie) => {
  if (
    recepie.title.toLowerCase() === "bolognese" ||
    recepie.title.toLowerCase() === "lasagne" ||
    recepie.title.toLowerCase() === "carbonara"
  ) {
    return recepie;
  }
});

const displayRecepies = () => {
  if (popularRecepies.length < 1) {
    cardContainer.innerHTML = `<h3 class="mx-auto text-[1.25rem] font-semibold">No recepies found</h3>`;
    return;
  }

  cardContainer.innerHTML = popularRecepies
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
displayRecepies();

//========== Recently Section JavaScript ==========
const recentContainer = document.querySelector("#recently-container");

function dateStringToNumber(dateString) {
  // Split the date string into year, month, and day
  const [day, month, year] = dateString.split(".");

  // Convert the year, month, and day to numbers
  const yearNumber = Number(year);
  const monthNumber = Number(month);
  const dayNumber = Number(day);
  const number = yearNumber * 1000 + monthNumber * 100 + dayNumber;

  return number;
}

function newestRecepie() {
  let index = 0;
  for (let i = 1; i < recepies.length; i++) {
    if (
      dateStringToNumber(recepies[i].uploaded) >
      dateStringToNumber(recepies[index].uploaded)
    ) {
      index = i;
    }
  }

  return `
  <img
    class="sm-img-shadow h-[15rem] sm:h-[20rem] xl:h-[25rem]"
    src="${recepies[index].picture}"
    alt=""
  />
  <div class="text-center lg:text-left">
    <h1 class="text-[1.25rem] uppercase font-bold sm:text-[2rem] dark:text-dmLightText">
      ${recepies[index].fullName}
    </h1>
    <p
      class="mx-auto mt-[1rem] w-[90%] sm:text-base text-normalText md:w-[75%] lg:w-[400px] xl:text-[1.125rem] xl:w-[520px] dark:text-dmNormalText"
    >
      ${recepies[index].description}
    </p>
    <button
      class="card-shadow flex mx-auto gap-1 items-center mt-[2rem] bg-darkRedBtn text-lightText py-4 px-6 rounded-full cursor-pointer group lg:ml-0 xl:mx-0"
    >
      <p class="font-[500]">Full Recepie</p>
      <i
        class="bx bx-right-arrow-alt text-[1.5rem] group-hover:translate-x-[6px] transition-all ease-in-out"
      ></i>
    </button>
  </div>
  `;
}

recentContainer.innerHTML = newestRecepie();

// document.addEventListener("DOMContentLoaded", function () {
//   let fadeElements = document.querySelectorAll(".fade-in");
//   let fadeTimeout;

//   function checkFadeElements() {
//     for (let i = 0; i < fadeElements.length; i++) {
//       let fadeElement = fadeElements[i];
//       let positionFromTop = fadeElement.getBoundingClientRect().top;

//       if (positionFromTop - window.innerHeight <= 0) {
//         fadeElement.classList.add("show");
//       } else {
//         fadeElement.classList.remove("show");
//       }
//     }
//   }

//   function scrollHandler() {
//     clearTimeout(fadeTimeout);
//     fadeTimeout = setTimeout(checkFadeElements, 5);
//   }

//   window.addEventListener("scroll", scrollHandler);
//   checkFadeElements();
// });

// container information

const breakFast = document.querySelector(".breakfast-container");
const main = document.querySelector(".main-container");
const beverage = document.querySelector(".beverage-container");
const drinks = document.querySelector(".drink-container");
const desert = document.querySelector(".desert-container");

// conatainer triggers
const breakFastBtn = document.querySelector(".breakfast-btn");
const mainBtn = document.querySelector(".main-btn");
const beverageBtn = document.querySelector(".beverage-btn");
const drinkBtn = document.querySelector(".drink-btn");
const desertBtn = document.querySelector(".desert-btn");

// Default Visibility 
breakFast.style.display = "none";
main.style.display = "block";
breakFastBtn.style.backgroundColor = "darkblue";

mainBtn.addEventListener("click", function () {
  breakFast.style.display = "none";
  main.style.display = "block";

  // beverage.style.display = "none";
  // drinks.style.display = "none";
  // desert.style.display = "none";

  mainBtn.style.backgroundColor = "darkblue";


  // colors
  breakFastBtn.style.backgroundColor = "rgb(3, 121, 194)";
});

breakFastBtn.addEventListener("click", function () {
  // Visible Containers
  breakFast.style.display = "block";
  main.style.display = "none";
  // beverage.style.display = "none";
  // drinks.style.display = "none";
  // desert.style.display = "none";

   // colors
   breakFastBtn.style.backgroundColor = "darkblue";
   mainBtn.style.backgroundColor = "rgb(3, 121, 194)";
});

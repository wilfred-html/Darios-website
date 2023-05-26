const breakFast = document.querySelector(".breakfast-container");
const main = document.querySelector(".main-container");
const beverage = document.querySelector(".beverage-container");
const drinks = document.querySelector(".drink-container");
const desert = document.querySelector(".desert-container");

// container triggers
const breakFastBtn = document.querySelector(".breakfast-btn");
const mainBtn = document.querySelector(".main-btn");
const beverageBtn = document.querySelector(".beverage-btn");
const drinkBtn = document.querySelector(".drink-btn");
const desertBtn = document.querySelector(".desert-btn");

// Default Visibility
breakFast.style.display = "none";
main.style.display = "block";
breakFastBtn.style.backgroundColor = "#3e6448";

// Set starting colors
mainBtn.style.backgroundColor = "#53835f";

mainBtn.addEventListener("click", function () {
  breakFast.style.display = "none";
  main.style.display = "block";

  mainBtn.style.backgroundColor = "#3e6448";
  breakFastBtn.style.backgroundColor = "#53835f";
});

breakFastBtn.addEventListener("click", function () {
  breakFast.style.display = "block";
  main.style.display = "none";

  breakFastBtn.style.backgroundColor = "#3e6448";
  mainBtn.style.backgroundColor = "#53835f";
});

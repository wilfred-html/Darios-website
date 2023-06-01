// Retrieve all list items
let list = document.querySelectorAll(".list li");

// Retrieve other elements
let box = document.querySelectorAll(".box");
let burgerMenu = document.querySelector(".burger-menu");
let menuContainer = document.querySelector(".menu-container");
let menuNav = document.querySelector(".menu-container .menu-navigation");
const description = document.querySelector(".description");
let drinks = document.querySelector(".Drinks");
let body1 = document.querySelector("body");

list.forEach((el) => {
  el.addEventListener("click", (e) => {
    // Change text color of all list items to black
    list.forEach((el1) => {
      el1.style.color = "black";
    });

    // Change text color of the clicked element to #65bff7
    e.target.style.color = "#65bff7";

    // Hide all boxes
    box.forEach((el2) => {
      el2.style.display = "none";
    });

    // Show the relevant box based on the clicked element's dataset
    document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
      el3.style.display = "flex";
    });
  });
});

burgerMenu.addEventListener("click", function () {
  if (menuContainer.style.display === "block") {
    menuContainer.style.display = "none";
    menuNav.style.display = "none";
    description.style.display = "block";
  }  else {
    menuContainer.style.display = "block";
    menuNav.style.display = "block";
    description.style.display = "none";
  }
});

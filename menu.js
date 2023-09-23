"use strict";

// Retrieve all list items
let list = document.querySelectorAll(".list li");

// Retrieve other elements
let box = document.querySelectorAll(".box");
let box2 = document.querySelectorAll(".box-2");
let box3 = document.querySelectorAll(".box3");
let burgerMenu = [
  document.querySelector(".burger-menu"),
  document.querySelector(".burger-menu-container p"),
];
let menuContainer = document.querySelector(".menu-container");
let menuNav = document.querySelector(".menu-container .menu-navigation");
const description = document.querySelector(".description");
let drinks = document.querySelector(".Drinks");
let drinkContainer = document.querySelector(".Drinks");
let body1 = document.querySelector("body");
let container = document.querySelector(".container");
let title = document.querySelector(".title");
let fixedspot = document.querySelector(".fixed-spot");

let moreBtn = document.querySelector(".hover-menu");
let showOptions = document.querySelector(".my-nav-hovers");

// Function to activate the code when scroll position is reached
let breakfastControl = document.querySelector(".Breakfast-control");
let loveAndPastaControl = document.querySelector(".loveAndPasta-control");
let drinksControl = document.querySelector(".Drinks-control");
let softdrinkControl = document.querySelector(".softdrink-control");
let dolciControl = document.querySelector(".dolci-control");

list.forEach((el) => {
  el.addEventListener("click", (e) => {
    // Change text color of all list items to black
    list.forEach((el1) => {
      if (window.matchMedia("(max-width: 670px)").matches) {
        el1.style.color = "white";
      } else {
        el1.style.color = "black";
      }
    });

    // Change text color of the clicked element to #65bff7
    e.target.style.color = "#65bff7";

    // Hide all boxes
    box.forEach((el2) => {
      el2.style.display = "none";
      document.querySelector(".fixed-center a").style.textDecoration = "none";
    });

    box3.forEach((el2) => {
      el2.style.display = "none";
    });

    // Show the relevant box based on the clicked element's dataset

    document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
      el3.style.display = "flex";
    });

    // Hide the menuContainer when a list button is clicked

    if (window.matchMedia("(max-width: 670px)").matches) {
      menuContainer.style.display = "none";
      menuNav.style.display = "none";
      container.style.paddingTop = "80px";
      description.style.display = "block";
    }
  });
});

function toggleMenu() {
  if (menuContainer.style.display === "block") {
    menuContainer.style.display = "none";
    menuNav.style.display = "none";
    container.style.paddingTop = "80px";
    description.style.display = "block";
  } else {
    menuContainer.style.display = "block";
    menuNav.style.display = "block";
    description.style.display = "none";
    container.style.paddingTop = "100%";
  }
}

function handleResize() {
  if (window.matchMedia("(min-width: 670px)").matches) {
    // Hide the menu if screen width is 740px or higher
    menuContainer.style.display = "none";
    menuNav.style.display = "none";
    container.style.paddingTop = "0px";
    description.style.display = "block";
  }
}

window.addEventListener("resize", handleResize);

burgerMenu[0].addEventListener("click", toggleMenu);
burgerMenu[1].addEventListener("click", toggleMenu);

function toggleDeskMenu() {
  let showOptions = document.querySelector(".my-nav-hovers");
  if (showOptions.classList.contains("hide")) {
    showOptions.classList.remove("hide");
    showOptions.classList.add("show");
  } else if (showOptions.classList.contains("show")) {
    showOptions.classList.remove("show");
    showOptions.classList.add("hide");
  }

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      showOptions.classList.remove("show");
      showOptions.classList.add("hide");
    }
  });
}

moreBtn.addEventListener("click", toggleDeskMenu);
document.body.addEventListener("scroll", toggleDeskMenu);

// scroll for sub category
window.addEventListener("DOMContentLoaded", function () {
  const breakfastLinks = document.querySelectorAll(".subtag");

  breakfastLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });

        // Add background color to the clicked link
        breakfastLinks.forEach(function (link) {
          link.style.borderBottom = "";
          link.style.color = "";
        });
        link.style.color = "#00d467"; // Set background color for the clicked link
      }
    });
  });
});

// Define the scroll position where you want to activate the code
const activationScrollPosition = 240; // Change this value to your desired scroll position

function activateCodeOnScroll() {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (window.matchMedia("(min-width: 670px)").matches) {
    if (
      scrollPosition >= activationScrollPosition &&
      document.querySelector(".Breakfast").style.display === "flex"
    ) {
      breakfastControl.style.display = "flex";
    } else if (
      scrollPosition >= activationScrollPosition &&
      document.querySelector(".LoveAndPasta").style.display === "flex"
    ) {
      loveAndPastaControl.style.display = "flex";
    } else if (
      scrollPosition >= activationScrollPosition &&
      document.querySelector(".Drinks").style.display === "flex"
    ) {
      drinksControl.style.display = "flex";
    } else if (
      scrollPosition >= activationScrollPosition &&
      document.querySelector(".Soft-drinks").style.display === "flex"
    ) {
      softdrinkControl.style.display = "flex";
    } else {
      breakfastControl.style.display = "none";
      // fixedspot.style.display = "none";
      loveAndPastaControl.style.display = "none";
      drinksControl.style.display = "none";
      softdrinkControl.style.display = "none";
      dolciControl.style.display = "none";
    }
  } else if (!window.matchMedia("(min-width: 670px)").matches) {
    fixedspot.style.display = "none";
  }
}

// Add event listener for scroll event
window.addEventListener("scroll", activateCodeOnScroll);

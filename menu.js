// Retrieve all list items
let list = document.querySelectorAll(".list li");

// Retrieve other elements
let box = document.querySelectorAll(".box");
let burgerMenu = [
  document.querySelector(".burger-menu"),
  document.querySelector(".burger-menu-container p"),
];
let menuContainer = document.querySelector(".menu-container");
let menuNav = document.querySelector(".menu-container .menu-navigation");
const description = document.querySelector(".description");
let drinks = document.querySelector(".Drinks");
let body1 = document.querySelector("body");
let container = document.querySelector(".container");

const hoverContainer = document.querySelector('.my-hover-container');
const navHovers = document.querySelector('.my-nav-hovers');


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
    });

    // Show the relevant box based on the clicked element's dataset
    document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
      el3.style.display = "flex";
    });
  });
});

function toggleMenu() {
  if (
    menuContainer.style.display === "block" 
  ) {
    menuContainer.style.display = "none";
    menuNav.style.display = "none";
    container.style.paddingTop = "0px";
    description.style.display = "block";
  } else {
    menuContainer.style.display = "block";
    menuNav.style.display = "block";
    description.style.display = "none";
    container.style.paddingTop = "50%";
  }
}

function handleResize() {
  if (window.matchMedia("(min-width: 670px)").matches) {
    // Hide the menu if screen width is 740px or higher
    menuContainer.style.display = "none";
    menuNav.style.display = "none";
    container.style.paddingTop = "0px";
    description.style.display = "block";
  } else {
    // Restore the menu visibility if screen width is less than 740px
    toggleMenu();
  }
}

window.addEventListener("resize", handleResize);

burgerMenu[0].addEventListener("click", toggleMenu);
burgerMenu[1].addEventListener("click", toggleMenu);



let timeoutId;

hoverContainer.addEventListener('mouseenter', function() {
  clearTimeout(timeoutId);
  navHovers.style.display = 'flex';
  navHovers.style.opacity = '1';
  navHovers.style.visibility = 'visible';
});

hoverContainer.addEventListener('mouseleave', function() {
  timeoutId = setTimeout(function() {
    navHovers.style.opacity = '0';
    navHovers.style.visibility = 'hidden';
  }, 500); // Adjust the delay as needed
});

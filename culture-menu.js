const burgerMenu = document.querySelector(".myicon");
const headerMenu = document.querySelector(".nav-container");
const dropDown = document.querySelector(".mymobile-dropdown");
const mytitle2 = document.querySelector(".myhero-title2");
const headerResize = document.querySelector(".header-resize")

dropDown.style.display = "none";

burgerMenu.addEventListener("click", function () {
  if (dropDown.style.display == "none") {
    dropDown.style.display = "flex";
    headerMenu.style.backgroundColor = "black";
    headerMenu.style.position = "fixed";
    mytitle2.style.paddingTop = "154px"
    headerResize.style.height = "340px"

  } else {
    dropDown.style.display = "none";
    headerMenu.style.backgroundColor = "transparent";
    headerMenu.style.position = "static";
    mytitle2.style.paddingTop = "0px"
    headerResize.style.height = "350px"




  }
});

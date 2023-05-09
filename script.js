document.addEventListener("DOMContentLoaded", function () {
  let fadeElements = document.querySelectorAll(".fade-in");
  let fadeTimeout;

  function checkFadeElements() {
    for (let i = 0; i < fadeElements.length; i++) {
      let fadeElement = fadeElements[i];
      let positionFromTop = fadeElement.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight <= 0) {
        fadeElement.classList.add("show");
      } else {
        fadeElement.classList.remove("show");
      }
    }
  }

  function scrollHandler() {
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(checkFadeElements, 5);
  } 

  window.addEventListener("scroll", scrollHandler);
  checkFadeElements();
});


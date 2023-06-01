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


(function (w,d,s,o,r,js,fjs) {
  w[r]=w[r]||function() {(w[r].q = w[r].q || []).push(arguments)}
  w[r]('app', '-vx658iRXl');
  if(d.getElementById(o)) return;
  js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
  js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
  js.async = 1; fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'trustmary-embed', 'tmary'));



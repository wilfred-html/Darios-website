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


function sendEmail() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Send the form data to the server for email processing
  fetch('sendemail.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&email=${email}&message=${message}`,
  })
  .then(response => {
      if (response.ok) {
          // Email sent successfully
          alert("Email sent successfully.");
      } else {
          // Handle the error here
          alert("Email sending failed.");
      }
  });
}

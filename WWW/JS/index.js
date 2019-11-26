const barsIcon = document.getElementById("bars-icon");
const navLinks = document.getElementById("nav-links");

// When the bars icon is clicked,
// display the nav links and change the bars icon apperance
barsIcon.addEventListener("click", function() {
  // Check whether the nav links are already showing
  if (barsIcon.className === "fa fa-2x fa-bars") {
    barsIcon.className = "fa fa-2x fa-times";
    navLinks.style.display = "block";
  } else {
    barsIcon.className = "fa fa-2x fa-bars";
    navLinks.style.display = "none";
  }
});

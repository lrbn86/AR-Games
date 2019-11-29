const barsIcon = document.getElementById("bars-icon");
const navLinks = document.getElementById("nav-links");

// TODO: This may or may not work properly. A workaround for now.
if (window.innerWidth > 499) {
  barsIcon.style.display = "none";
} else {
  barsIcon.style.display = "block";
}

// When the bars icon is clicked,
// display the nav links and change the bars icon apperance
barsIcon.addEventListener("click", function () {
  if (window.innerWidth < 499) {
    // Check whether the nav links are already showing
    if (barsIcon.className === "fa fa-2x fa-bars") {
      barsIcon.className = "fa fa-2x fa-times";
      navLinks.style.display = "block";
    } else {
      barsIcon.className = "fa fa-2x fa-bars";
      navLinks.style.display = "none";
    }
  }
});

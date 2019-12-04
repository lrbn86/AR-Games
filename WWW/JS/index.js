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

    // Problem: While in mobile screen, if we close the navigation list and
    // switch screen size, the navLinks will continue to be disappeared on nonmobile screen
    // This happens because JS doesn't know
    // that the window size has changed..unless we add eventlistener
    navLinks.style.display = "none";
  }
});

// Fixes the above problem...
// Hacky, but it works...
// This listens to changes in screen size and act appropriately.
window.addEventListener("resize", function() {
  if (this.window.innerWidth > 499) {
    navLinks.style.display = "block";
  } else {
    barsIcon.className = "fa fa-2x fa-bars";
    navLinks.style.display = "none";
  }
});

var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input");
var textarea = document.getElementById("message-area");
var form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  // Remove whitespaces from both sides
  name = nameInput.value.trim();
  email = emailInput.value.trim();
  text = textarea.value.trim();
  if (name.length === 0) {
    nameInput.style.border = "4px solid red";
  }
  if (email.length === 0) {
    emailInput.style.border = "4px solid red";
  }
  if (text.length === 0) {
    textarea.style.border = "4px solid red";
  }

  if (name.length === 0 || email.length === 0 || text.length === 0) {
    alert("Please fill out all the fields. They must not be blank.");
    // TODO: This does not check whether email is valid...
  } else {
    alert("Message sent! Now clearing fields!");
    nameInput.value = "";
    emailInput.value = "";
    textarea.value = "";
  }
});

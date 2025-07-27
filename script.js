// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you, Ayesha will get back to you soon!");
  this.reset();
});

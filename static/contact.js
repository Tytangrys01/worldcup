const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

// Close menu function
function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
}

// Open menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when close button is clicked
navClose.addEventListener("click", closeMenu);

// Close menu when a link is clicked
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Handle form submission
const contactForm = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the form and show confirmation message
  contactForm.style.display = "none";
  confirmationMessage.style.display = "block";

  // Reset form for future submissions
  contactForm.reset();

  // Optionally reset after 5 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none";
    contactForm.style.display = "flex";
  }, 5000);
});

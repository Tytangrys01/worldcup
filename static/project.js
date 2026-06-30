const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("modal-close");

function openModal(src, alt) {
  modalImage.src = src;
  modalImage.alt = alt || "Project preview";
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
  modalImage.src = "";
}

document.querySelectorAll(".project-item").forEach((item) => {
  const img = item.querySelector("img");
  const viewButton = item.querySelector("button.view-image-btn");
  const thumbnailSrc = img?.src;
  const previewSrc = viewButton?.dataset.viewSrc || thumbnailSrc;
  const titleText = item.querySelector("p")?.innerText || "Project preview";

  if (img) {
    img.addEventListener("click", () => openModal(thumbnailSrc, titleText));
  }

  if (viewButton) {
    viewButton.addEventListener("click", () =>
      openModal(previewSrc, titleText),
    );
  }
});

closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
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

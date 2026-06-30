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
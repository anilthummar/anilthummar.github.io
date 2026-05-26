(function () {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-links");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const open = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

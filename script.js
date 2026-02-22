(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        }
      });
    });
  }

  // Placeholder demo form behaviour
  const demoBtn = document.getElementById("demoSubmit");
  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      const name = (document.getElementById("name")?.value || "").trim();
      const email = (document.getElementById("email")?.value || "").trim();
      const penname = (document.getElementById("penname")?.value || "").trim();
      const genre = (document.getElementById("genre")?.value || "").trim();

      if (!name || !email || !penname || !genre) {
        alert("Please fill in the required fields.");
        return;
      }

      alert(
        "Demo request captured (placeholder).\n\nNext step: connect this form to Formspree/Netlify Forms or your backend so requests are actually sent."
      );
    });
  }
})();

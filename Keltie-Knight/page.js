(() => {
  const releaseDate = "2026-11-24";
  const today = new Intl.DateTimeFormat("en-CA", {
    year: "numeric", month: "2-digit", day: "2-digit", timeZone: "America/New_York"
  }).format(new Date());

  if (today < releaseDate) return;

  document.querySelectorAll("[data-release-cta]").forEach((link) => {
    link.textContent = "Find it on Amazon";
  });
  document.querySelectorAll("[data-release-status]").forEach((label) => {
    label.textContent = "Published 24 November 2026";
  });
})();

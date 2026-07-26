document.querySelectorAll("[data-amazon]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "amazon_click", {
        author_name: link.dataset.author,
        book_title: link.dataset.book,
        link_url: link.href,
        transport_type: "beacon"
      });
    }
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

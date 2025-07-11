// script.js - JavaScript for menu toggle and Book of the Day slider

// Toggle the navigation menu on mobile (show/hide links)
function toggleMenu() {
  var navUl = document.querySelector('nav ul');
  if (navUl) {
    navUl.classList.toggle('open');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Book of the Day slider (on Home page)
  var coverImg = document.getElementById('book-cover');
  var titleEl = document.getElementById('book-title');
  var authorEl = document.getElementById('book-author');
  var descEl = document.getElementById('book-description');
  if (coverImg && titleEl && authorEl && descEl) {
    // Define an array of books to feature (example data)
    var books = [
      {
        cover: 'images/book1.jpg',
        title: 'Example Book Title',
        author: 'Author Name',
        description: 'This is a brief description or tagline for the book of the day.'
      },
      {
        cover: 'images/book2.jpg',
        title: 'Another Book Title',
        author: 'Second Author',
        description: 'Another captivating description for the daily book feature.'
      },
      {
        cover: 'images/book3.jpg',
        title: 'Third Book Title',
        author: 'Third Author',
        description: 'A third book description to showcase in the rotation.'
      }
    ];
    var currentIndex = 0;
    function showBook(index) {
      coverImg.src = books[index].cover;
      coverImg.alt = 'Cover of ' + books[index].title + ' by ' + books[index].author;
      titleEl.textContent = books[index].title;
      authorEl.textContent = 'by ' + books[index].author;
      descEl.textContent = books[index].description;
    }
    // Initial display
    showBook(currentIndex);
    // Change book every 5 seconds
    setInterval(function() {
      currentIndex = (currentIndex + 1) % books.length;
      showBook(currentIndex);
    }, 5000);
  }
});

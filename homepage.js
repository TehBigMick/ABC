const BOOKS = [
  {
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    category: "Fantasy & LitRPG",
    genre: "LitRPG",
    moods: ["Adrenaline", "Eerie"],
    image: "/Matt-Dinniman/assets/dungeon-crawler-carl-01.webp",
    url: "/Matt-Dinniman/",
    hook: "Savage humour, dungeon-crawl chaos and a series built for binge-reading."
  },
  {
    title: "Indigo Ridge",
    author: "Devney Perry",
    category: "Romance",
    genre: "Small-town romance",
    moods: ["Cosy", "Emotional"],
    image: "/DevneyPerry/assets/devney-perry-indigo-ridge.webp",
    url: "/DevneyPerry/",
    hook: "Small-town tension, mystery and an emotionally satisfying romantic pay-off."
  },
  {
    title: "Asylum",
    author: "Amy Cross",
    category: "Horror",
    genre: "Supernatural horror",
    moods: ["Eerie"],
    image: "/AmyCross/assets/amy-cross-asylum-cover.webp",
    url: "/AmyCross/",
    hook: "An unsettling haunted-place read for anyone who likes dread that keeps building."
  },
  {
    title: "A Litter of Bones",
    author: "J.D. Kirk",
    category: "Crime & Thriller",
    genre: "Scottish crime",
    moods: ["Adrenaline", "Eerie"],
    image: "/JD-Kirk/assets/jd-kirk-book1.webp",
    url: "/JD-Kirk/",
    hook: "Dark cases, dry humour and the proper starting point for DCI Jack Logan."
  },
  {
    title: "Floating Hotel",
    author: "Grace Curtis",
    category: "Science fiction",
    genre: "Cosy space opera",
    moods: ["Cosy", "Thoughtful"],
    image: "https://covers.openlibrary.org/b/isbn/0756419301-L.jpg?default=false",
    imageAlt: "Floating Hotel book cover by Grace Curtis",
    url: "/Grace-Curtis/",
    hook: "A wandering luxury hotel, a found family and a quiet mystery moving through the stars."
  },
  {
    title: "The Whistler",
    author: "Nick Medina",
    category: "Horror",
    genre: "Indigenous horror",
    moods: ["Eerie", "Adrenaline"],
    image: "https://images2.penguinrandomhouse.com/cover/9780593820407",
    imageAlt: "The Whistler book cover by Nick Medina",
    url: "/Nick-Medina/",
    hook: "Native folklore, a reckless ghost hunter and the terrible cost of whistling after dark."
  },
  {
    title: "Rebel Skies",
    author: "Ann Sei Lin",
    category: "Children's",
    genre: "Young-adult fantasy",
    moods: ["Adrenaline", "Emotional"],
    image: "https://images2.penguinrandomhouse.com/cover/9781774884003",
    imageAlt: "Rebel Skies book cover by Ann Sei Lin",
    url: "/Ann-Sei-Lin/",
    hook: "Flying cities, living paper spirits and a young crafter questioning the empire she serves."
  },
  {
    title: "The In Crowd",
    author: "Charlotte Vassell",
    category: "Crime & Thriller",
    genre: "Society mystery",
    moods: ["Adrenaline", "Thoughtful"],
    image: "https://m.media-amazon.com/images/I/810mMG+EjvL._SL1500_.jpg",
    imageAlt: "The In Crowd book cover by Charlotte Vassell",
    url: "/Charlotte-Vassell/",
    hook: "A Thames drowning, London privilege and a detective who knows money can distort justice."
  },
  {
    title: "The Final Strife",
    author: "Saara El-Arifi",
    category: "Fantasy & LitRPG",
    genre: "Epic fantasy",
    moods: ["Adrenaline", "Emotional"],
    image: "https://images2.penguinrandomhouse.com/cover/9780593356944",
    imageAlt: "The Final Strife book cover by Saara El-Arifi",
    url: "/Saara-El-Arifi/",
    hook: "A blood-divided empire, three women and a rebellion built to overturn the rules of power."
  },
  {
    title: "The Mysterious Santa",
    author: "Lila Rose",
    category: "Romance",
    genre: "Festive romance",
    moods: ["Cosy", "Emotional"],
    image: "/LilaRose/assets/the-mysterious-santa.webp",
    url: "/LilaRose/",
    hook: "A wholesome festive romance with small-town warmth and comfort-read energy."
  },
  {
    title: "The Beach Wedding",
    author: "Bella Andre",
    category: "Romance",
    genre: "Contemporary romance",
    moods: ["Cosy", "Emotional"],
    image: "/bella-andre/assets/bella-andre-beach-wedding.webp",
    url: "/bella-andre/",
    hook: "Beachside escapism, big feelings and a romance designed for a weekend binge."
  },
  {
    title: "Inheritance",
    author: "Penny Reid",
    category: "Romance",
    genre: "Smart romance",
    moods: ["Cosy", "Emotional"],
    image: "/penny-reid/assets/penny-reid-inheritance.webp",
    url: "/penny-reid/",
    hook: "Fake dating, old history and chemistry that refuses to stay in the lab."
  },
  {
    title: "He Who Fights with Monsters",
    author: "Travis Deverell",
    category: "Fantasy & LitRPG",
    genre: "Progression fantasy",
    moods: ["Adrenaline"],
    image: "/TravisDeverell/assets/he-who-fights-with-monsters-outworlder.jpg",
    url: "/TravisDeverell/",
    hook: "Magic, monsters and progression fantasy that turns one chapter into half the night."
  },
  {
    title: "The Primal Hunter",
    author: "Zogarth",
    category: "Fantasy & LitRPG",
    genre: "System apocalypse",
    moods: ["Adrenaline"],
    image: "/Zogarth/assets/the-primal-hunter-01.jpg",
    url: "/Zogarth/",
    hook: "A deadly new world, relentless progression and a very long runway for series readers."
  },
  {
    title: "Radio Tower",
    author: "Boris Bacic",
    category: "Horror",
    genre: "Small-town horror",
    moods: ["Eerie", "Adrenaline"],
    image: "/BorisBacic/assets/start-1.webp",
    url: "/BorisBacic/",
    hook: "Fast, isolated and unsettling horror with nowhere safe for the characters to hide."
  },
  {
    title: "Book Daddy",
    author: "K.M. Avery",
    category: "Romance",
    genre: "Queer romance",
    moods: ["Cosy", "Emotional"],
    image: "/KMAvery/assets/book-daddy-cover.webp",
    url: "/KMAvery/",
    hook: "Warmth, chemistry and a romance hook that knows exactly what its readers want."
  },
  {
    title: "Scandalous Affairs",
    author: "Lady Legacy",
    category: "Contemporary",
    genre: "Urban fiction",
    moods: ["Adrenaline", "Emotional"],
    image: "/LadyLegacy/assets/scandalous-affairs-book-1.webp",
    url: "/LadyLegacy/",
    hook: "Power, betrayal and explosive relationship drama with no interest in playing safe."
  },
  {
    title: "Rosewater",
    author: "Liv Little",
    category: "Contemporary",
    genre: "Queer fiction",
    moods: ["Emotional", "Thoughtful"],
    image: "/LivLittle/assets/rosewater.webp",
    url: "/LivLittle/",
    hook: "Fresh, intimate storytelling about identity, love and the communities we build."
  },
  {
    title: "The Mismatch",
    author: "Sara Jafari",
    category: "Contemporary",
    genre: "Contemporary fiction",
    moods: ["Emotional", "Thoughtful"],
    image: "/SaraJafari/assets/the-mismatch.webp",
    url: "/SaraJafari/",
    hook: "Love, family and personal growth told with warmth and emotional honesty."
  },
  {
    title: "Lost in Me",
    author: "Sasha R.C.",
    category: "Romance",
    genre: "Dark romance",
    moods: ["Eerie", "Emotional"],
    image: "/SashaRC/assets/lost-in-me.webp",
    url: "/SashaRC/",
    hook: "High-stakes dark romance for readers who want intensity over easy answers."
  },
  {
    title: "Things That Keep Me Up at Night",
    author: "Marie McKenzie",
    category: "Non-fiction",
    genre: "Wellbeing",
    moods: ["Thoughtful", "Emotional"],
    image: "/MarieMcKenzie/things-that-keep-me-up-at-night.webp",
    url: "/MarieMcKenzie/",
    hook: "Trauma-informed writing about healing, support and the difficult work of being human."
  },
  {
    title: "110 Life Skills for Teenage Boys",
    author: "Tory Hunt",
    category: "Non-fiction",
    genre: "Practical guide",
    moods: ["Thoughtful"],
    image: "/ToryHunt/110-life-skills-teenage-boys.webp",
    url: "/ToryHunt/",
    hook: "Clear, practical help for building independence, responsibility and confidence."
  },
  {
    title: "The Last Harbour",
    author: "M Kelly",
    category: "Crime & Thriller",
    genre: "Literary suspense",
    moods: ["Eerie", "Emotional"],
    image: "/assets/the-last-harbour-cover.webp",
    url: "/authors/m-kelly.html",
    hook: "A frozen harbour, a divided family and a town learning that waiting is no longer neutral."
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Science fiction",
    genre: "Science-fiction adventure",
    moods: ["Adrenaline", "Thoughtful"],
    image: "https://covers.openlibrary.org/b/isbn/0593135202-L.jpg?default=false",
    imageAlt: "Project Hail Mary book cover by Andy Weir",
    url: "/Andy-Weir/",
    hook: "A lone astronaut, a species-level crisis and science that turns every answer into a new problem."
  },
  {
    title: "The Housemaid",
    author: "Freida McFadden",
    category: "Crime & Thriller",
    genre: "Psychological thriller",
    moods: ["Eerie", "Adrenaline"],
    image: "https://covers.openlibrary.org/b/isbn/1538742578-L.jpg?default=false",
    imageAlt: "The Housemaid book cover by Freida McFadden",
    url: "/Freida-McFadden/",
    hook: "A live-in job, a wealthy family and the creeping certainty that every person in the house is hiding something."
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    category: "Fantasy & LitRPG",
    genre: "Romantasy",
    moods: ["Adrenaline", "Emotional"],
    image: "https://covers.openlibrary.org/b/isbn/1649374046-L.jpg?default=false",
    imageAlt: "Fourth Wing book cover by Rebecca Yarros",
    url: "/Rebecca-Yarros/",
    hook: "A lethal dragon-rider college where survival, rebellion and romantic tension all arrive at once."
  },
  {
    title: "Atmosphere",
    author: "Taylor Jenkins Reid",
    category: "Contemporary",
    genre: "Historical fiction",
    moods: ["Emotional", "Thoughtful"],
    image: "https://covers.openlibrary.org/b/isbn/0593158717-L.jpg?default=false",
    imageAlt: "Atmosphere book cover by Taylor Jenkins Reid",
    url: "/Taylor-Jenkins-Reid/",
    hook: "Ambition, love and personal risk inside NASA's 1980s space-shuttle programme."
  },
  {
    title: "Wombat Waiting",
    author: "Katherine Applegate",
    category: "Children's",
    genre: "Middle-grade fiction",
    moods: ["Cosy", "Emotional"],
    image: "https://m.media-amazon.com/images/I/41EJTU5KzzL._SY445_SX342_ML2_.jpg",
    imageAlt: "Wombat Waiting book cover by Katherine Applegate",
    url: "/Katherine-Applegate/",
    hook: "A compassionate animal story about resilience, belonging and a dog waiting to find her person."
  },
  {
    title: "The Baby Dragon Cafe",
    author: "A. T. Qureshi",
    category: "Romance",
    genre: "Cosy fantasy romance",
    moods: ["Cosy", "Emotional"],
    image: "https://covers.openlibrary.org/b/isbn/1801300682-L.jpg?default=false",
    imageAlt: "The Baby Dragon Cafe book cover by A. T. Qureshi",
    url: "/AT-Qureshi/",
    hook: "Baby dragons, a struggling café and a grumpy-sunshine bargain with a warm romantic centre."
  },
  {
    title: "A Dowry of Blood",
    author: "S. T. Gibson",
    category: "Fantasy & LitRPG",
    genre: "Queer gothic fantasy",
    moods: ["Eerie", "Emotional"],
    image: "https://covers.openlibrary.org/b/isbn/0316501071-L.jpg?default=false",
    imageAlt: "A Dowry of Blood book cover by S. T. Gibson",
    url: "/ST-Gibson/",
    hook: "A lyrical, bloody reimagining of Dracula’s brides about obsession, control and choosing freedom."
  },
  {
    title: "Hedgewitch",
    author: "Skye McKenna",
    category: "Children's",
    genre: "Middle-grade fantasy",
    moods: ["Cosy", "Adrenaline"],
    image: "https://covers.openlibrary.org/b/isbn/1801300089-L.jpg?default=false",
    imageAlt: "Hedgewitch book cover by Skye McKenna",
    url: "/Skye-McKenna/",
    hook: "A young witch, a talking cat and a cosy village facing dangers from the world beyond the hedge."
  },
  {
    title: "This Book Kills",
    author: "Ravena Guron",
    category: "Crime & Thriller",
    genre: "Young-adult mystery",
    moods: ["Adrenaline", "Eerie"],
    image: "https://covers.openlibrary.org/b/isbn/1728296900-L.jpg?default=false",
    imageAlt: "This Book Kills book cover by Ravena Guron",
    url: "/Ravena-Guron/",
    hook: "A student’s murder story becomes real at an elite boarding school, placing its author under suspicion."
  },
  {
    title: "A Dawn of Onyx",
    author: "Kate Golden",
    category: "Fantasy & LitRPG",
    genre: "Romantasy",
    moods: ["Adrenaline", "Emotional"],
    image: "https://covers.openlibrary.org/b/isbn/0593641906-L.jpg?default=false",
    imageAlt: "A Dawn of Onyx book cover by Kate Golden",
    url: "/Kate-Golden/",
    hook: "A captured healer, a dangerous king and a completed enemies-to-lovers fantasy trilogy."
  }
];

const INITIAL_BOOK_LIMIT = 16;
const BOOK_LIMIT_INCREMENT = 8;
const AUTHOR_PREVIEW_LIMIT = 8;

const state = {
  query: "",
  genre: "All",
  mood: "All",
  visibleBooks: INITIAL_BOOK_LIMIT
};

let allAuthorsVisible = false;

const elements = {
  authorList: document.getElementById("authorList"),
  toggleAuthors: document.getElementById("toggleAuthors"),
  bookGrid: document.getElementById("bookGrid"),
  catalogueSearch: document.getElementById("catalogueSearch"),
  clearFilters: document.getElementById("clearFilters"),
  emptyReset: document.getElementById("emptyReset"),
  emptyState: document.getElementById("emptyState"),
  genreFilters: document.getElementById("genreFilters"),
  heroSearch: document.getElementById("heroSearch"),
  heroSearchForm: document.getElementById("heroSearchForm"),
  loadMoreBooks: document.getElementById("loadMoreBooks"),
  moodFilter: document.getElementById("moodFilter"),
  resultCount: document.getElementById("resultCount"),
  spotlightAuthor: document.getElementById("spotlightAuthor"),
  spotlightCard: document.getElementById("spotlightCard"),
  spotlightCover: document.getElementById("spotlightCover"),
  spotlightGenre: document.getElementById("spotlightGenre"),
  spotlightHook: document.getElementById("spotlightHook"),
  spotlightKicker: document.getElementById("spotlightKicker"),
  spotlightLink: document.getElementById("spotlightLink"),
  spotlightMood: document.getElementById("spotlightMood"),
  spotlightTitle: document.getElementById("spotlightTitle"),
  surpriseButton: document.getElementById("surpriseButton")
};

function trackEvent(name, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, parameters);
  }
}

function normalise(value) {
  return value.toLocaleLowerCase("en-GB").trim();
}

function getFilteredBooks() {
  const query = normalise(state.query);

  return BOOKS.filter((book) => {
    const matchesGenre = state.genre === "All" || book.category === state.genre;
    const matchesMood = state.mood === "All" || book.moods.includes(state.mood);
    const haystack = [
      book.title,
      book.author,
      book.category,
      book.genre,
      book.hook,
      ...book.moods
    ].join(" ");
    const matchesQuery = !query || normalise(haystack).includes(query);

    return matchesGenre && matchesMood && matchesQuery;
  });
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createBookCard(book) {
  const article = document.createElement("article");
  article.className = "book-card";

  const coverLink = document.createElement("a");
  coverLink.className = "book-cover-link";
  coverLink.href = book.url;
  coverLink.setAttribute("aria-label", `Explore ${book.title} by ${book.author}`);

  const image = document.createElement("img");
  image.className = "book-cover";
  image.src = book.image;
  image.alt = book.imageAlt || `${book.title} by ${book.author}`;
  image.loading = "lazy";
  image.decoding = "async";
  coverLink.appendChild(image);

  const body = document.createElement("div");
  body.className = "book-body";

  const tags = document.createElement("div");
  tags.className = "book-tags";
  tags.appendChild(createTextElement("span", "", book.genre));
  tags.appendChild(createTextElement("span", "", book.moods[0]));

  const title = createTextElement("h3", "", book.title);
  const author = createTextElement("p", "book-author", book.author);
  const hook = createTextElement("p", "book-hook", book.hook);

  const link = document.createElement("a");
  link.className = "book-link";
  link.href = book.url;
  link.textContent = "Explore this book →";

  for (const interactiveLink of [coverLink, link]) {
    interactiveLink.addEventListener("click", () => {
      trackEvent("homepage_book_click", {
        book_title: book.title,
        author_name: book.author,
        genre: book.category
      });
    });
  }

  body.append(tags, title, author, hook, link);
  article.append(coverLink, body);
  return article;
}

function updateFilterButtons() {
  elements.genreFilters.querySelectorAll("[data-genre]").forEach((button) => {
    const isActive = button.dataset.genre === state.genre;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateQueryString() {
  const parameters = new URLSearchParams();
  if (state.query) parameters.set("q", state.query);
  if (state.genre !== "All") parameters.set("genre", state.genre);
  if (state.mood !== "All") parameters.set("mood", state.mood);
  const suffix = parameters.toString() ? `?${parameters.toString()}` : window.location.pathname;
  window.history.replaceState({}, "", suffix);
}

function renderBooks(options = {}) {
  const books = getFilteredBooks();
  const isWholeShelf = !state.query && state.genre === "All" && state.mood === "All";
  const visibleBooks = isWholeShelf ? books.slice(0, state.visibleBooks) : books;
  elements.bookGrid.replaceChildren(...visibleBooks.map(createBookCard));

  const total = books.length;
  const hasMore = isWholeShelf && visibleBooks.length < total;
  elements.resultCount.textContent = total === BOOKS.length
    ? hasMore
      ? "Showing a curated first look"
      : "Showing the whole curated shelf"
    : total === 1
      ? "Showing one matching book"
      : "Showing matching books";

  elements.loadMoreBooks.hidden = !hasMore;
  elements.bookGrid.hidden = total === 0;
  elements.emptyState.hidden = total !== 0;
  elements.clearFilters.hidden = !state.query && state.genre === "All" && state.mood === "All";
  elements.catalogueSearch.value = state.query;
  elements.moodFilter.value = state.mood;
  updateFilterButtons();
  updateQueryString();

  if (options.scroll) {
    document.getElementById("discover").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetFilters(options = {}) {
  state.query = "";
  state.genre = "All";
  state.mood = "All";
  state.visibleBooks = INITIAL_BOOK_LIMIT;
  elements.heroSearch.value = "";
  renderBooks(options);
}

function setGenre(genre, options = {}) {
  state.genre = genre;
  state.visibleBooks = INITIAL_BOOK_LIMIT;
  renderBooks(options);
  trackEvent("homepage_genre_filter", { genre });
}

function setMood(mood, options = {}) {
  state.mood = mood;
  state.visibleBooks = INITIAL_BOOK_LIMIT;
  renderBooks(options);
  trackEvent("homepage_mood_filter", { mood });
}

function updateSpotlight(book) {
  elements.spotlightCard.classList.add("is-changing");

  window.setTimeout(() => {
    elements.spotlightCover.src = book.image;
    elements.spotlightCover.alt = book.imageAlt || `${book.title} by ${book.author}`;
    elements.spotlightKicker.textContent = "Your surprise pick";
    elements.spotlightTitle.textContent = book.title;
    elements.spotlightAuthor.textContent = book.author;
    elements.spotlightHook.textContent = book.hook;
    elements.spotlightGenre.textContent = book.genre;
    elements.spotlightMood.textContent = book.moods[0];
    elements.spotlightLink.href = book.url;
    elements.spotlightLink.textContent = "See why it is worth starting";
    elements.spotlightCard.classList.remove("is-changing");
  }, 170);
}

function pickSurprise() {
  const pool = getFilteredBooks().length ? getFilteredBooks() : BOOKS;
  const currentTitle = elements.spotlightTitle.textContent;
  const alternatives = pool.filter((book) => book.title !== currentTitle);
  const choices = alternatives.length ? alternatives : pool;
  const book = choices[Math.floor(Math.random() * choices.length)];

  updateSpotlight(book);
  trackEvent("homepage_surprise_pick", {
    book_title: book.title,
    active_genre: state.genre,
    active_mood: state.mood
  });

  elements.spotlightCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderAuthors() {
  const authors = [...new Map(BOOKS.map((book) => [book.author, book.url])).entries()]
    .sort(([first], [second]) => first.localeCompare(second, "en-GB"));

  const links = authors.map(([name, url], index) => {
    const link = document.createElement("a");
    link.className = "author-link";
    link.href = url;
    link.textContent = name;
    link.hidden = !allAuthorsVisible && index >= AUTHOR_PREVIEW_LIMIT;
    link.addEventListener("click", () => {
      trackEvent("homepage_author_click", { author_name: name });
    });
    return link;
  });

  elements.authorList.replaceChildren(...links);
  elements.toggleAuthors.hidden = authors.length <= AUTHOR_PREVIEW_LIMIT;
  elements.toggleAuthors.textContent = allAuthorsVisible ? "Show fewer authors" : "Show all authors";
  elements.toggleAuthors.setAttribute("aria-expanded", String(allAuthorsVisible));
}

function initialiseFromQueryString() {
  const parameters = new URLSearchParams(window.location.search);
  const query = parameters.get("q") || "";
  const genre = parameters.get("genre") || "All";
  const mood = parameters.get("mood") || "All";
  const validGenres = new Set(["All", ...BOOKS.map((book) => book.category)]);
  const validMoods = new Set(["All", ...BOOKS.flatMap((book) => book.moods)]);

  state.query = query;
  state.genre = validGenres.has(genre) ? genre : "All";
  state.mood = validMoods.has(mood) ? mood : "All";
  elements.heroSearch.value = state.query;
}

elements.heroSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = elements.heroSearch.value.trim();
  renderBooks({ scroll: true });
  trackEvent("homepage_search", { search_term: state.query || "(empty)" });
});

elements.catalogueSearch.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.visibleBooks = INITIAL_BOOK_LIMIT;
  renderBooks();
});

elements.genreFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (button) setGenre(button.dataset.genre);
});

elements.moodFilter.addEventListener("change", (event) => {
  setMood(event.target.value);
});

document.querySelectorAll("[data-quick-genre]").forEach((button) => {
  button.addEventListener("click", () => setGenre(button.dataset.quickGenre, { scroll: true }));
});

document.querySelectorAll("[data-quick-mood]").forEach((button) => {
  button.addEventListener("click", () => setMood(button.dataset.quickMood, { scroll: true }));
});

document.querySelectorAll("[data-mood-card]").forEach((button) => {
  button.addEventListener("click", () => setMood(button.dataset.moodCard, { scroll: true }));
});

elements.clearFilters.addEventListener("click", () => resetFilters());
elements.emptyReset.addEventListener("click", () => resetFilters());
elements.loadMoreBooks.addEventListener("click", () => {
  state.visibleBooks += BOOK_LIMIT_INCREMENT;
  renderBooks();
  trackEvent("homepage_show_more_books");
});
elements.toggleAuthors.addEventListener("click", () => {
  allAuthorsVisible = !allAuthorsVisible;
  renderAuthors();
  trackEvent("homepage_toggle_authors", { expanded: allAuthorsVisible });
});
elements.surpriseButton.addEventListener("click", pickSurprise);
elements.spotlightLink.addEventListener("click", () => {
  trackEvent("homepage_spotlight_click", {
    book_title: elements.spotlightTitle.textContent
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
initialiseFromQueryString();
renderBooks();
renderAuthors();

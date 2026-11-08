/* ============ DATA ============ */
const RECIPES = [
  {
    id: 1,
    title: "Chocolate Creamy Goat Cheese Soufflés",
    cat: "Dessert",
    time: "45 min",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700&q=80",
    desc: "Whipped goat cheese and dark chocolate baked into a cloud-soft soufflé that collapses in the best way.",
  },
  {
    id: 2,
    title: "Recipe: Creamy Coconut Tomato Soup",
    cat: "Soup",
    time: "35 min",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80",
    desc: "Silky coconut milk meets roasted tomatoes and a hint of chili. One pot, zero fuss.",
  },
  {
    id: 3,
    title: "Creamy Enfield Goat Curry",
    cat: "Main",
    time: "60 min",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=80",
    desc: "Tender goat meat simmered in a rich coconut curry with warm spices and a lime finish.",
  },
  {
    id: 4,
    title: "Chocolate Woven-Lattice Pie",
    cat: "Dessert",
    time: "70 min",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    desc: "A buttery lattice crust over molten chocolate, baked until crackly and glossy.",
  },
  {
    id: 5,
    title: "Crispy Buttermilk Fried Chicken",
    cat: "Main",
    time: "50 min",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&q=80",
    desc: "Extra-crispy buttermilk brine with a cast-iron sear and a soft, juicy center.",
  },
  {
    id: 6,
    title: "Truffle Mushroom Pasta",
    cat: "Main",
    time: "30 min",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=80",
    desc: "Buttery pasta ribbons tossed with wild mushrooms, parmesan and black truffle.",
  },
  {
    id: 7,
    title: "Golden Fluffy Buttermilk Pancakes",
    cat: "Breakfast",
    time: "25 min",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700&q=80",
    desc: "Three golden layers, crackly edges, and a butter tower on top.",
  },
  {
    id: 8,
    title: "Smashed Avocado Toast",
    cat: "Breakfast",
    time: "10 min",
    rating: "4.6",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700&q=80",
    desc: "Smashed avocado, chili flakes, poached egg and sourdough — brunch sorted in ten minutes.",
  },
  {
    id: 9,
    title: "Charred Corn Street Tacos",
    cat: "Main",
    time: "25 min",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&q=80",
    desc: "Smoky grilled corn, avocado crema and lime on warm corn tortillas.",
  },
  {
    id: 10,
    title: "Roasted Pumpkin Soup",
    cat: "Soup",
    time: "50 min",
    rating: "4.6",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=700&q=80",
    desc: "Velvety pumpkin soup with toasted seeds and a swirl of cream.",
  },
  {
    id: 11,
    title: "Chocolate Lava Cakes",
    cat: "Dessert",
    time: "25 min",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=700&q=80",
    desc: "Molten chocolate centers, crisp edges, ready in 20 minutes.",
  },
  {
    id: 12,
    title: "Garden Pesto Pasta Salad",
    cat: "Main",
    time: "20 min",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=700&q=80",
    desc: "Basil pesto, cherry tomatoes and burrata over cold pasta. Picnic approved.",
  },
];

const QUICK = [
  { key: "all", icon: "🏠", label: "Home" },
  { key: "best", icon: "🔥", label: "Best" },
  { key: "fav", icon: "💖", label: "Favorite" },
  { key: "bookmark", icon: "🔖", label: "Bookmark" },
  { key: "more", icon: "⋯", label: "More" },
];

const ARTICLES = [
  {
    icon: "🥟",
    title: "Three things I learned after being a line cook",
    desc: "Burns teach patience, prep teaches respect, and the 10pm rush teaches humility.",
  },
  {
    icon: "🍞",
    title: "With its delicately thin outside and pillowy middle",
    desc: "The secret to a sourdough that shatters on the outside but clouds inside.",
  },
  {
    icon: "🔥",
    title: "Why your steak needs a dry brine",
    desc: "Two hours of salt and patience gives you a crust you can hear from across the room.",
  },
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd9?w=1400&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400&q=80",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1400&q=80",
];

/* ============ STATE ============ */
let state = { cat: "All", query: "", onlyFav: false, sort: "newest" };
let favorites = JSON.parse(localStorage.getItem("favs") || "[]");
let bookmarks = JSON.parse(localStorage.getItem("marks") || "[]");

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

/* ============ RENDER QUICK ICONS ============ */
function renderQuick() {
  $("#quick").innerHTML = QUICK.map(
    (q) => `
    <button class="${q.key === "all" ? "on" : ""}" data-q="${q.key}">
      <span class="ic">${q.icon}</span>${q.label}
    </button>`,
  ).join("");
  $$("#quick button").forEach(
    (b) =>
      (b.onclick = () => {
        $$("#quick button").forEach((x) => x.classList.remove("on"));
        b.classList.add("on");
        const k = b.dataset.q;
        if (k === "fav") {
          state.onlyFav = !state.onlyFav;
          state.cat = "All";
        } else if (k === "best") {
          state.cat = "All";
          state.sort = "top";
        } else if (k === "bookmark") {
          state.onlyFav = false;
          state.cat = "Bookmarked";
        } else if (k === "all") {
          state.onlyFav = false;
          state.cat = "All";
          state.sort = "newest";
        } else {
          toast("More options coming soon 😄");
        }
        renderChips();
        render();
      }),
  );
}

/* ============ CHIPS ============ */
function renderChips() {
  const cats = ["All", "Breakfast", "Main", "Dessert", "Soup", "Bookmarked"];
  $("#chips").innerHTML = cats
    .map(
      (c) =>
        `<div class="chip ${state.cat === c ? "on" : ""}" data-c="${c}">${c}</div>`,
    )
    .join("");
  $$("#chips .chip").forEach(
    (c) =>
      (c.onclick = () => {
        state.cat = c.dataset.c;
        state.onlyFav = false;
        renderChips();
        render();
      }),
  );
}

/* ============ GRID ============ */
function render() {
  let list = RECIPES.filter((r) => {
    if (state.cat === "Bookmarked") return bookmarks.includes(r.id);
    if (state.onlyFav) return favorites.includes(r.id);
    if (state.cat !== "All") return r.cat === state.cat;
    return true;
  });
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.cat.toLowerCase().includes(q),
    );
  }
  if (state.sort === "top") list.sort((a, b) => b.rating - a.rating);

  $("#count").textContent =
    `${list.length} recipe${list.length !== 1 ? "s" : ""}`;
  const grid = $("#grid");
  if (!list.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:60px 0">No recipes found 🍽️</p>`;
    return;
  }
  grid.innerHTML = list
    .map(
      (r) => `
    <article class="card reveal in" data-id="${r.id}">
      <div class="thumb">
        <img src="${r.img}" alt="${r.title}" onerror="this.style.display='none'">
        <span class="tag">${r.cat}</span>
        <button class="fav ${favorites.includes(r.id) ? "on" : ""}" data-fav="${r.id}">${favorites.includes(r.id) ? "❤️" : "🤍"}</button>
      </div>
      <div class="body">
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <div class="meta"><span>⏱ ${r.time}</span><span>⭐ ${r.rating}</span></div>
      </div>
    </article>`,
    )
    .join("");
  $$("#grid .fav").forEach(
    (b) =>
      (b.onclick = (e) => {
        e.stopPropagation();
        toggleFav(+b.dataset.fav);
      }),
  );
  $$("#grid .card").forEach(
    (c) => (c.onclick = () => openModal(+c.dataset.id)),
  );
}

/* ============ FAVORITES ============ */
function toggleFav(id) {
  const i = favorites.indexOf(id);
  if (i > -1) favorites.splice(i, 1);
  else favorites.push(id);
  localStorage.setItem("favs", JSON.stringify(favorites));
  render();
  toast(
    favorites.includes(id) ? "Saved to favorites ❤️" : "Removed from favorites",
  );
}
function toggleMark(id) {
  const i = bookmarks.indexOf(id);
  if (i > -1) bookmarks.splice(i, 1);
  else bookmarks.push(id);
  localStorage.setItem("marks", JSON.stringify(bookmarks));
  toast(bookmarks.includes(id) ? "Bookmarked 🔖" : "Bookmark removed");
}

/* ============ MODAL ============ */
function openModal(id) {
  const r = RECIPES.find((x) => x.id === id);
  $("#mImg").src = r.img;
  $("#mTitle").textContent = r.title;
  $("#mDesc").textContent = r.desc;
  $("#mMeta").innerHTML =
    `<span>⏱ ${r.time}</span><span>⭐ ${r.rating}</span><span>🏷 ${r.cat}</span>`;
  $("#mFav").textContent = favorites.includes(id)
    ? "Remove from favorites ❤️"
    : "Save recipe";
  $("#mFav").onclick = () => {
    toggleFav(id);
    openModal(id);
  };
  $("#modal").classList.add("open");
}
$("#closeModal").onclick = $("#mClose2").onclick = () =>
  $("#modal").classList.remove("open");
$("#modal").onclick = (e) => {
  if (e.target.id === "modal") $("#modal").classList.remove("open");
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $("#modal").classList.remove("open");
});

/* ============ ARTICLES ============ */
$("#articles").innerHTML = ARTICLES.map(
  (a) => `
  <div class="art reveal">
    <div class="dot">${a.icon}</div>
    <h4>${a.title}</h4>
    <p>${a.desc}</p>
  </div>`,
).join("");

/* ============ HERO SLIDER ============ */
let heroIdx = 0;
setInterval(() => {
  heroIdx = (heroIdx + 1) % HERO_IMAGES.length;
  $("#heroImg").style.opacity = 0;
  setTimeout(() => {
    $("#heroImg").src = HERO_IMAGES[heroIdx];
    $("#heroImg").style.opacity = 1;
  }, 400);
}, 6000);
$("#heroImg").style.transition = "opacity .4s";

/* ============ THEME ============ */
$("#themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light",
  );
  $("#themeBtn").textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
};
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  $("#themeBtn").textContent = "☀️";
}

/* ============ NAV / UI ============ */
$("#burger").onclick = () => $("#navlinks").classList.toggle("open");
$$("#navlinks a").forEach(
  (a) => (a.onclick = () => $("#navlinks").classList.remove("open")),
);
$("#favFilter").onclick = () => {
  state.onlyFav = !state.onlyFav;
  state.cat = "All";
  renderChips();
  render();
  toast(state.onlyFav ? "Showing favorites 💖" : "All recipes");
};
$("#search").addEventListener("input", (e) => {
  state.query = e.target.value.trim();
  render();
});
$("#featureBtn").onclick = () => openModal(7);
function scrollToRecipes() {
  $("#latest").scrollIntoView({ behavior: "smooth" });
}
window.scrollToRecipes = scrollToRecipes;

/* ============ REVEAL + BACK TO TOP ============ */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    }),
  { threshold: 0.1 },
);
setTimeout(() => $$(".reveal").forEach((el) => io.observe(el)), 50);
window.addEventListener("scroll", () => {
  $("#top").classList.toggle("show", scrollY > 500);
});
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* ============ TOAST ============ */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ============ INIT ============ */
renderQuick();
renderChips();
render();

// =================================
// RECIPEO - MAIN JAVASCRIPT
// =================================

// 1. RECIPES DATA

const recipes = [
  {
    id: 1,
    name: "Italian Pizza",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
  },
  {
    id: 2,
    name: "Fresh Salad",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    time: "45 min",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
  },
  {
    id: 4,
    name: "Pancakes",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
  },
  {
    id: 5,
    name: "Chicken Pasta",
    time: "35 min",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
  },
  {
    id: 6,
    name: "Cheese Burger",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: 7,
    name: "Fruit Smoothie",
    time: "10 min",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600",
  },
  {
    id: 8,
    name: "Strawberry Dessert",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
  },
  {
    id: 9,
    name: "Grilled Chicken",
    time: "40 min",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600",
  },
  {
    id: 10,
    name: "Sushi Rolls",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
  },
];
// 2. CATEGORIES DATA
const categories = [
  {
    name: "All Recipes",
    image: recipes[0].image,
  },
  {
    name: "Breakfast",
    image: recipes[3].image,
  },
  {
    name: "Lunch",
    image: recipes[0].image,
  },
  {
    name: "Dinner",
    image: recipes[4].image,
  },
  {
    name: "Desserts",
    image: recipes[2].image,
  },
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
  },
  {
    name: "Pasta",
    image: recipes[4].image,
  },
  {
    name: "Salads",
    image: recipes[1].image,
  },
  {
    name: "Burgers",
    image: recipes[5].image,
  },
  {
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400",
  },
  {
    name: "Drinks",
    image: recipes[6].image,
  },
  {
    name: "Vegetarian",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
  },
  {
    name: "Chicken",
    image: recipes[8].image,
  },
  {
    name: "Soups",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
  },
  {
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
  },
];
/ 3. FEATURED RECIPES DATA

const featured = [
  {
    name: "Italian Pizza",
    description: "Fresh and delicious",
    image: recipes[0].image,
  },
  {
    name: "Healthy Salad",
    description: "Eat healthy every day",
    image: recipes[1].image,
  },
  {
    name: "Chocolate Cake",
    description: "Sweet moments",
    image: recipes[2].image,
  },
  {
    name: "Pancakes",
    description: "Perfect breakfast",
    image: recipes[3].image,
  },
  {
    name: "Chicken Pasta",
    description: "Taste of Italy",
    image: recipes[4].image,
  },
  {
    name: "Cheese Burger",
    description: "Delicious and fresh",
    image: recipes[5].image,
  },
  {
    name: "Fresh Smoothie",
    description: "Healthy drinks",
    image: recipes[6].image,
  },
  {
    name: "Sushi Rolls",
    description: "Japanese special food",
    image: recipes[9].image,
  },
];

// 4. HTML ELEMENTS

const categoryTrack = document.getElementById("categoryTrack");

const featuredTrack = document.getElementById("featuredTrack");

const popularTrack = document.getElementById("popularTrack");

// 5. DISPLAY CATEGORIES

function displayCategories() {
  categoryTrack.innerHTML = "";

  categories.forEach((category, index) => {
    const card = document.createElement("div");

    card.className = "category-card";

    if (index === 0) {
      card.classList.add("active");
    }

    card.innerHTML = `
            <img
                src="${category.image}"
                alt="${category.name}"
                loading="lazy"
            >

            <p>${category.name}</p>
        `;

    card.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach((item) => {
        item.classList.remove("active");
      });

      card.classList.add("active");
    });

    categoryTrack.appendChild(card);
  });
}

// 6. DISPLAY FEATURED RECIPES

function displayFeatured() {
  featuredTrack.innerHTML = "";

  featured.forEach((item) => {
    const card = document.createElement("div");

    card.className = "featured-card";

    card.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="featured-info">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                // <span class="card-arrow">➜</span>

            </div>
        `;

    featuredTrack.appendChild(card);
  });
}

// 7. DISPLAY POPULAR RECIPES

function displayPopular() {
  popularTrack.innerHTML = "";

  const popularRecipes = recipes.slice(0, 10);

  popularRecipes.forEach((recipe) => {
    const card = document.createElement("div");

    card.className = "popular-card";

    card.innerHTML = `
            <img
                src="${recipe.image}"
                alt="${recipe.name}"
                loading="lazy"
            >

            <div class="popular-info">

                <h3>${recipe.name}</h3>

                <p>⏱ ${recipe.time}</p>

            </div>
        `;

    popularTrack.appendChild(card);
  });
}

// 8. AUTOMATIC CAROUSEL

function createSlider(windowId, leftId, rightId, speed) {
  const slider = document.getElementById(windowId);

  const leftButton = document.getElementById(leftId);

  const rightButton = document.getElementById(rightId);

  let direction = 1;

  let paused = false;

  let animationId;

  let manualMove = false;

  // AUTOMATIC MOVEMENT

  function animate() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (maxScroll > 0 && !paused && !manualMove) {
      slider.scrollLeft += direction * speed;

      if (slider.scrollLeft >= maxScroll) {
        direction = -1;
      }

      if (slider.scrollLeft <= 0) {
        direction = 1;
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();

  // PAUSE ON HOVER

  slider.addEventListener("mouseenter", () => {
    paused = true;
  });

  // RESUME ON MOUSE LEAVE

  slider.addEventListener("mouseleave", () => {
    paused = false;
  });

  // TOUCH SUPPORT

  slider.addEventListener("touchstart", () => {
    paused = true;
  });

  slider.addEventListener("touchend", () => {
    paused = false;
  });

  // LEFT ARROW

  leftButton.addEventListener("click", () => {
    manualMove = true;

    direction = -1;

    slider.scrollBy({
      left: -250,

      behavior: "smooth",
    });

    setTimeout(() => {
      manualMove = false;
    }, 800);
  });

  // RIGHT ARROW

  rightButton.addEventListener("click", () => {
    manualMove = true;

    direction = 1;

    slider.scrollBy({
      left: 250,

      behavior: "smooth",
    });

    setTimeout(() => {
      manualMove = false;
    }, 800);
  });
}

// 9. INITIALIZE THREE SLIDERS

createSlider("catWindow", "catPrev", "catNext", 0.4);

createSlider("featuredWindow", "featuredPrev", "featuredNext", 0.6);

createSlider("popularWindow", "popularPrev", "popularNext", 0.5);

// 10. START WEBSITE

displayCategories();

displayFeatured();

displayPopular();
// باز و بسته کردن منوی موبایل

const burger = document.getElementById("burger");
const navlinks = document.getElementById("navlinks");

burger.addEventListener("click", function () {
  navlinks.classList.toggle("open");
});

navlinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navlinks.classList.remove("open");
  });
});

// باز و بسته کردن پنل سبد خرید

const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");

cartBtn.addEventListener("click", function () {
  cartPanel.classList.toggle("open");
});

// تغییر حالت روشن و تاریک

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("percipeo-theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");

  themeBtn.textContent = darkMode ? "☀️" : "🌙";

  localStorage.setItem("percipeo-theme", darkMode ? "dark" : "light");
});

// دکمه علاقه‌مندی‌ها

const favFilter = document.getElementById("favFilter");

favFilter.addEventListener("click", function () {
  document.dispatchEvent(new CustomEvent("showFavorites"));
});

// بستن منو و سبد خرید با کلید Escape

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    navlinks.classList.remove("open");
    cartPanel.classList.remove("open");
  }
});
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
        <button class="add-cart" data-add="${r.id}" type="button">Add to cart 🛒</button>
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
  $$("#grid .add-cart").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      addToCart(+button.dataset.add);
    };
  });
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

/* ============ SHOPPING CART / ORDERS ============ */
let cart = [];

function updateCartCount() {
  $("#cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id) {
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) return;
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id: recipe.id, title: recipe.title, qty: 1 });
  updateCartCount();
  renderCart();
  toast("Added to your cart 🛒");
}

function renderCart() {
  const container = $("#cartItems");
  if (!cart.length) {
    container.innerHTML =
      '<p class="cart-empty">Your cart is empty. Add a dish to get started.</p>';
    return;
  }
  container.innerHTML = cart
    .map(
      (item) => `
          <div class="cart-item">
            <div><strong>${item.title}</strong><small>Quantity: ${item.qty}</small></div>
            <div class="qty-controls">
              <button type="button" data-minus="${item.id}" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button type="button" data-plus="${item.id}" aria-label="Increase quantity">+</button>
              <button type="button" class="remove-item" data-remove="${item.id}" aria-label="Remove item">×</button>
            </div>
          </div>
        `,
    )
    .join("");

  $$("[data-plus]").forEach(
    (button) => (button.onclick = () => changeCartQty(+button.dataset.plus, 1)),
  );
  $$("[data-minus]").forEach(
    (button) =>
      (button.onclick = () => changeCartQty(+button.dataset.minus, -1)),
  );
  $$("[data-remove]").forEach(
    (button) =>
      (button.onclick = () => {
        cart = cart.filter((item) => item.id !== +button.dataset.remove);
        updateCartCount();
        renderCart();
      }),
  );
}

function changeCartQty(id, change) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) cart = cart.filter((entry) => entry.id !== id);
  updateCartCount();
  renderCart();
}

$("#cartBtn").onclick = () => {
  renderCart();
  $("#cartModal").classList.add("open");
};
$("#closeCart").onclick = () => $("#cartModal").classList.remove("open");
$("#cartModal").onclick = (event) => {
  if (event.target.id === "cartModal") $("#cartModal").classList.remove("open");
};

$("#orderForm").onsubmit = (event) => {
  event.preventDefault();
  if (!cart.length) {
    toast("Please add a dish to your cart first.");
    return;
  }
  const orderDetails = cart
    .map((item) => `${item.title} × ${item.qty}`)
    .join("\\n");
  const customer = $("#customerName").value.trim();
  const phone = $("#customerPhone").value.trim();
  const address = $("#customerAddress").value.trim();
  if (!customer || !phone || !address) return;

  // Front-end demo: show the submitted order confirmation.
  console.log("New order:", {
    customer,
    phone,
    address,
    note: $("#orderNote").value.trim(),
    items: orderDetails,
  });
  cart = [];
  updateCartCount();
  renderCart();
  $("#orderForm").reset();
  $("#cartModal").classList.remove("open");
  toast("Your order has been registered successfully! ✅");
};

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
  $("#mAddCart").onclick = () => addToCart(id);
  $("#modal").classList.add("open");
}
$("#closeModal").onclick = $("#mClose2").onclick = () =>
  $("#modal").classList.remove("open");
$("#modal").onclick = (e) => {
  if (e.target.id === "modal") $("#modal").classList.remove("open");
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $("#modal").classList.remove("open");
    $("#cartModal").classList.remove("open");
  }
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

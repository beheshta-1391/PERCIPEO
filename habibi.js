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

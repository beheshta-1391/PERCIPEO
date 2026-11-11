// =====================================
// PERCIPEO - MAIN JAVASCRIPT
// =====================================

// DOM ELEMENTS
const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const sortSelect = document.getElementById("sortSelect");
const recipeModal = document.getElementById("recipeModal");
const panelOverlay = document.getElementById("panelOverlay");
const panelContent = document.getElementById("panelContent");
const detailContent = document.getElementById("recipeDetailContent");
const toast = document.getElementById("toast");

// APPLICATION STATE
let selectedCategory = "All";
let currentSearch = "";
let currentView = "all";
let grocery = JSON.parse(localStorage.getItem("percipeo-grocery") || "[]");
let favorites = JSON.parse(localStorage.getItem("percipeo-favorites") || "[]");
let personalRecipes = JSON.parse(
  localStorage.getItem("percipeo-personal") || "[]",
);
let weeklyPlan = JSON.parse(localStorage.getItem("percipeo-weekly") || "{}");
let customRecipes = [];
let currentRecipe = null;

// =====================================
// SAVE DATA
// =====================================

function saveData() {
  localStorage.setItem("percipeo-grocery", JSON.stringify(grocery));
  localStorage.setItem("percipeo-favorites", JSON.stringify(favorites));
  localStorage.setItem("percipeo-personal", JSON.stringify(personalRecipes));
  localStorage.setItem("percipeo-weekly", JSON.stringify(weeklyPlan));
}

function allRecipes() {
  return [...recipes, ...personalRecipes];
}

// =====================================
// TOAST MESSAGE
// =====================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// =====================================
// DISPLAY RECIPES
// =====================================

function renderRecipes() {
  let list = allRecipes();

  if (currentView === "favorites") {
    list = list.filter((recipe) => favorites.includes(recipe.id));
  }

  if (currentSearch) {
    list = list.filter((recipe) => {
      const titleMatch = recipe.title.toLowerCase().includes(currentSearch);
      const ingredientMatch = recipe.ingredients.some((item) =>
        item.toLowerCase().includes(currentSearch),
      );

      return titleMatch || ingredientMatch;
    });
  }

  if (selectedCategory !== "All") {
    list = list.filter((recipe) => recipe.category === selectedCategory);
  }

  const sort = sortSelect.value;

  if (sort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (sort === "time") {
    list.sort((a, b) => a.time - b.time);
  } else if (sort === "az") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  recipeGrid.innerHTML = "";

  list.forEach((recipe) => {
    const saved = favorites.includes(recipe.id);

    const card = document.createElement("article");
    card.className = "recipe-card";

    card.innerHTML = `
      <div class="card-image">
        <img src="${recipe.image}" alt="${recipe.title}"
          onerror="this.src='https://placehold.co/600x400/f0e8d8/493a32?text=PERCIPEO'">

        <button class="favorite-btn ${saved ? "saved" : ""}"
          data-action="favorite" data-id="${recipe.id}">
          <i class="${saved ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>

      <div class="card-body">
        <span class="card-category">${recipe.category}</span>
        <h3>${recipe.title}</h3>

        <div class="card-meta">
          <span><i class="fa-regular fa-clock"></i> ${recipe.time} min</span>
          <span><i class="fa-solid fa-star"></i> ${recipe.rating}</span>
        </div>

        <div class="card-bottom">
          <strong>${recipe.difficulty}</strong>
          <button class="view-btn" data-action="details" data-id="${recipe.id}">
            View Recipe →
          </button>
        </div>
      </div>
    `;

    recipeGrid.appendChild(card);
  });

  document.getElementById("resultCount").textContent =
    `${list.length} recipes found`;

  document
    .getElementById("emptyState")
    .classList.toggle("hidden", list.length > 0);

  updateCategoryButtons();
}

// =====================================
// CATEGORY FILTER
// =====================================

function updateCategoryButtons() {
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.category === selectedCategory,
    );
  });
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest(".category-btn");
  if (!button) return;

  selectedCategory = button.dataset.category;
  currentView = "all";
  document.getElementById("recipesTitle").textContent = "Popular Recipes";

  renderRecipes();
});

// =====================================
// SEARCH
// =====================================

searchInput.addEventListener("input", (event) => {
  currentSearch = event.target.value.trim().toLowerCase();
  currentView = "all";
  renderRecipes();
});

// =====================================
// SORTING
// =====================================

sortSelect.addEventListener("change", renderRecipes);

// =====================================
// FAVORITES
// =====================================

function toggleFavorite(id) {
  const exists = favorites.includes(id);

  if (exists) {
    favorites = favorites.filter((item) => item !== id);
    showToast("Removed from Favorites");
  } else {
    favorites.push(id);
    showToast("Added to Favorites ❤️");
  }

  saveData();
  updateCounts();
  renderRecipes();

  if (currentRecipe && currentRecipe.id === id) {
    showRecipeDetails(id);
  }
}

// =====================================
// RECIPE DETAILS
// =====================================

function showRecipeDetails(id) {
  const recipe = allRecipes().find((item) => item.id === id);
  if (!recipe) return;

  currentRecipe = recipe;

  const saved = favorites.includes(id);

  detailContent.innerHTML = `
    <img class="detail-image" src="${recipe.image}" alt="${recipe.title}"
      onerror="this.src='https://placehold.co/600x400/f0e8d8/493a32?text=PERCIPEO'">

    <span class="card-category">${recipe.category}</span>
    <h2 class="detail-title">${recipe.title}</h2>

    <p class="detail-description">${recipe.description}</p>

    <div class="card-meta">
      <span>⭐ ${recipe.rating}</span>
      <span>⏱ ${recipe.time} minutes</span>
      <span>${recipe.difficulty}</span>
    </div>

    <div class="serving-control">
      <strong>Servings: </strong>
      <button class="icon-btn" data-action="servings-minus">−</button>
      <span id="servingNumber">${recipe.servings}</span>
      <button class="icon-btn" data-action="servings-plus">+</button>
    </div>

    <div class="detail-columns">
      <div>
        <h3>Ingredients</h3>
        <ul id="ingredientList">
          ${recipe.ingredients
            .map((item, index) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </div>

      <div>
        <h3>Instructions</h3>
        <ol>
          ${recipe.instructions.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </div>
    </div>

    <div class="detail-actions">
      <button class="primary-btn" data-action="detail-favorite" data-id="${id}">
        ${saved ? "Remove Favorite" : "Add to Favorites"}
      </button>

      <button class="primary-btn" data-action="add-ingredients" data-id="${id}">
        Add to Grocery List
      </button>

      <button class="primary-btn" data-action="print">
        Print Recipe
      </button>

      <button class="primary-btn" data-action="share" data-id="${id}">
        Share
      </button>
    </div>
  `;

  recipeModal.classList.remove("hidden");
}

function changeServings(amount) {
  if (!currentRecipe) return;

  const number = Math.max(1, currentRecipe.servings + amount);
  currentRecipe.servings = number;

  document.getElementById("servingNumber").textContent = number;

  const ingredientList = document.getElementById("ingredientList");

  ingredientList.innerHTML = currentRecipe.ingredients
    .map((item) => `<li>${item}</li>`)
    .join("");

  showToast("Servings updated");
}

// =====================================
// GROCERY LIST
// =====================================

function addToGrocery(items) {
  items.forEach((item) => {
    const exists = grocery.some((groceryItem) => groceryItem.name === item);

    if (!exists) {
      grocery.push({
        id: Date.now() + Math.random(),
        name: item,
        purchased: false,
      });
    }
  });

  saveData();
  updateCounts();
  showToast("Ingredients added to Grocery List");
}

function renderGrocery() {
  panelContent.innerHTML = `
    <h2 class="panel-title">🛒 Grocery List</h2>

    <form class="panel-form" id="groceryForm">
      <input name="item" placeholder="Add an ingredient..." required>
      <button class="primary-btn">Add Item</button>
    </form>

    <div id="groceryItems"></div>

    <button class="primary-btn" data-action="clear-grocery">
      Clear All
    </button>
  `;

  const container = document.getElementById("groceryItems");

  grocery.forEach((item) => {
    const row = document.createElement("div");
    row.className = "panel-item";

    const name = document.createElement("span");
    name.textContent = item.name;
    name.style.textDecoration = item.purchased ? "line-through" : "none";

    const actions = document.createElement("div");
    actions.innerHTML = `
      <button data-action="purchase-item" data-id="${item.id}">
        <i class="fa-solid fa-check"></i>
      </button>
      <button data-action="delete-item" data-id="${item.id}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    row.append(name, actions);
    container.appendChild(row);
  });

  document.getElementById("groceryForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = new FormData(event.target).get("item").trim();
    if (!name) return;

    addToGrocery([name]);
    renderGrocery();
  });
}

// =====================================
// PERSONAL RECIPES
// =====================================

function renderPersonalRecipes() {
  panelContent.innerHTML = `
    <h2 class="panel-title">📖 My Recipes</h2>

    <form class="panel-form" id="personalForm">
      <label>Recipe Name</label>
      <input name="title" required>

      <label>Category</label>
      <select name="category">
        <option>Fast Food</option>
        <option>Traditional</option>
        <option>Desserts</option>
        <option>Drinks</option>
        <option>Healthy</option>
      </select>

      <label>Image URL</label>
      <input name="image" type="url" placeholder="https://...">

      <label>Cooking Time (minutes)</label>
      <input name="time" type="number" min="1" value="30" required>

      <label>Ingredients (separate with commas)</label>
      <textarea name="ingredients" required></textarea>

      <label>Instructions (separate with commas)</label>
      <textarea name="instructions" required></textarea>

      <label>Description</label>
      <textarea name="description"></textarea>

      <button class="primary-btn">Save Recipe</button>
    </form>

    <h3>My Saved Recipes</h3>
    <div id="personalItems"></div>
  `;

  document
    .getElementById("personalForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const form = new FormData(event.target);

      personalRecipes.push({
        id: Date.now(),
        title: form.get("title").trim(),
        category: form.get("category"),
        image:
          form.get("image") ||
          "https://placehold.co/600x400/f0e8d8/493a32?text=My+Recipe",
        time: Number(form.get("time")),
        rating: 5,
        difficulty: "Easy",
        servings: 2,
        description: form.get("description"),
        ingredients: form
          .get("ingredients")
          .split(",")
          .map((x) => x.trim()),
        instructions: form
          .get("instructions")
          .split(",")
          .map((x) => x.trim()),
      });

      saveData();
      renderRecipes();
      renderPersonalRecipes();
      showToast("Your recipe has been saved!");
    });

  const container = document.getElementById("personalItems");

  personalRecipes.forEach((recipe) => {
    const row = document.createElement("div");
    row.className = "panel-item";

    const name = document.createElement("span");
    name.textContent = recipe.title;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", () => {
      personalRecipes = personalRecipes.filter((item) => item.id !== recipe.id);
      favorites = favorites.filter((id) => id !== recipe.id);
      saveData();
      renderPersonalRecipes();
      renderRecipes();
      updateCounts();
      showToast("Recipe deleted");
    });

    row.append(name, deleteButton);
    container.appendChild(row);
  });
}

// =====================================
// WEEKLY MEAL PLAN
// =====================================

function renderMealPlan() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  panelContent.innerHTML = `
    <h2 class="panel-title">📅 Weekly Meal Plan</h2>

    <form class="panel-form" id="mealForm">
      <label>Choose a Day</label>
      <select name="day">
        ${days.map((day) => `<option>${day}</option>`).join("")}
      </select>

      <label>Meal</label>
      <select name="meal">
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>

      <label>Recipe</label>
      <select name="recipe">
        ${allRecipes()
          .map((r) => `<option value="${r.id}">${r.title}</option>`)
          .join("")}
      </select>

      <button class="primary-btn">Add to Plan</button>
    </form>

    <div id="mealItems"></div>
  `;

  function showMeals() {
    const container = document.getElementById("mealItems");
    container.innerHTML = "";

    days.forEach((day) => {
      const dayBox = document.createElement("div");
      dayBox.className = "panel-item";
      dayBox.style.display = "block";

      const title = document.createElement("strong");
      title.textContent = day;
      dayBox.appendChild(title);

      (weeklyPlan[day] || []).forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "panel-item";
        row.textContent = `${item.meal}: ${item.title}`;

        const remove = document.createElement("button");
        remove.textContent = "×";
        remove.addEventListener("click", () => {
          weeklyPlan[day].splice(index, 1);
          saveData();
          showMeals();
        });

        row.appendChild(remove);
        dayBox.appendChild(row);
      });

      container.appendChild(dayBox);
    });
  }

  document.getElementById("mealForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const recipe = allRecipes().find(
      (r) => r.id === Number(form.get("recipe")),
    );

    if (!recipe) return;

    const day = form.get("day");

    weeklyPlan[day] = weeklyPlan[day] || [];
    weeklyPlan[day].push({
      meal: form.get("meal"),
      title: recipe.title,
    });

    saveData();
    showMeals();
    showToast("Meal added to your plan");
  });

  showMeals();
}

// =====================================
// OTHER PANELS
// =====================================

function openPanel(type) {
  panelOverlay.classList.remove("hidden");

  if (type === "grocery") {
    renderGrocery();
  } else if (type === "favorites") {
    panelContent.innerHTML = `<h2 class="panel-title">❤️ My Favorites</h2>`;
    const list = allRecipes().filter((r) => favorites.includes(r.id));

    list.forEach((recipe) => {
      const row = document.createElement("div");
      row.className = "panel-item";

      const name = document.createElement("span");
      name.textContent = recipe.title;

      const view = document.createElement("button");
      view.textContent = "View";
      view.addEventListener("click", () => {
        panelOverlay.classList.add("hidden");
        showRecipeDetails(recipe.id);
      });

      const remove = document.createElement("button");
      remove.innerHTML = '<i class="fa-solid fa-trash"></i>';
      remove.addEventListener("click", () => {
        favorites = favorites.filter((id) => id !== recipe.id);
        saveData();
        updateCounts();
        renderRecipes();
        openPanel("favorites");
      });

      row.append(name, view, remove);
      panelContent.appendChild(row);
    });

    if (!list.length) {
      panelContent.innerHTML += "<p>No favorite recipes yet.</p>";
    }
  } else if (type === "personal") {
    renderPersonalRecipes();
  } else if (type === "meal") {
    renderMealPlan();
  } else {
    const content = {
      courses: [
        "👩‍🍳 Cooking Courses",
        "Explore beginner and advanced cooking lessons.",
      ],
      videos: [
        "🎬 Recipe Videos",
        "Video lessons will be added to this collection.",
      ],
      weekly: [
        "⭐ Weekly Picks",
        "Discover our favorite recipes of this week.",
      ],
      faq: [
        "❓ Help & FAQs",
        "How do I save recipes? Click the heart icon.<br>How do I add ingredients? Open a recipe and click Add to Grocery List.<br>Can I create my own recipes? Yes, use Personal Recipes.",
      ],
    };

    const data = content[type];

    panelContent.innerHTML = `
      <h2 class="panel-title">${data[0]}</h2>
      <p class="detail-description">${data[1]}</p>
    `;
  }
}

// =====================================
// UPDATE COUNTS
// =====================================

function updateCounts() {
  document.getElementById("groceryCount").textContent = grocery.length;
}

// =====================================
// NAVIGATION ACTIONS
// =====================================

function navigateAction(action) {
  const sections = {
    home: "hero",
    browse: "recipesSection",
    weekly: "weeklySection",
  };

  if (sections[action]) {
    currentView = "all";
    currentSearch = "";
    selectedCategory = "All";
    searchInput.value = "";
    renderRecipes();

    document.getElementById(sections[action]).scrollIntoView({
      behavior: "smooth",
    });

    panelOverlay.classList.add("hidden");
    return;
  }

  if (action === "favorites") {
    currentView = "favorites";
    selectedCategory = "All";
    document.getElementById("recipesTitle").textContent = "My Favorite Recipes";
    renderRecipes();
    document
      .getElementById("recipesSection")
      .scrollIntoView({ behavior: "smooth" });
    panelOverlay.classList.add("hidden");
    return;
  }

  openPanel(action);
}

// =====================================
// EVENT DELEGATION
// =====================================

document.addEventListener("click", async (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (actionButton) {
    const action = actionButton.dataset.action;
    const id = Number(actionButton.dataset.id);

    switch (action) {
      case "home":
      case "browse":
      case "weekly":
      case "favorites":
      case "grocery":
      case "meal":
      case "personal":
      case "courses":
      case "videos":
      case "faq":
        navigateAction(action);
        break;

      case "favorite":
      case "detail-favorite":
        toggleFavorite(id);
        break;

      case "details":
        showRecipeDetails(id);
        break;

      case "servings-plus":
        changeServings(1);
        break;

      case "servings-minus":
        changeServings(-1);
        break;

      case "add-ingredients": {
        const recipe = allRecipes().find((r) => r.id === id);
        if (recipe) addToGrocery(recipe.ingredients);
        break;
      }

      case "clear-grocery":
        if (confirm("Clear the entire grocery list?")) {
          grocery = [];
          saveData();
          updateCounts();
          renderGrocery();
          showToast("Grocery list cleared");
        }
        break;

      case "delete-item":
        grocery = grocery.filter((item) => item.id !== id);
        saveData();
        updateCounts();
        renderGrocery();
        break;

      case "purchase-item": {
        const item = grocery.find((item) => item.id === id);
        if (item) item.purchased = !item.purchased;
        saveData();
        renderGrocery();
        break;
      }

      case "print":
        window.print();
        break;

      case "share": {
        const recipe = allRecipes().find((r) => r.id === id);
        if (recipe) {
          const url = location.origin + location.pathname + "#recipe-" + id;

          if (navigator.share) {
            navigator.share({ title: recipe.title, url }).catch(() => {});
          } else {
            try {
              await navigator.clipboard.writeText(url);
              showToast("Recipe link copied!");
            } catch {
              showToast("Copy is unavailable in this browser.");
            }
          }
        }
        break;
      }
    }
  }

  if (event.target.closest("[data-close]")) {
    recipeModal.classList.add("hidden");
  }
});

// =====================================
// MODAL CLOSE
// =====================================

document.getElementById("closePanel").addEventListener("click", () => {
  panelOverlay.classList.add("hidden");
});

recipeModal.addEventListener("click", (event) => {
  if (event.target === recipeModal) {
    recipeModal.classList.add("hidden");
  }
});

panelOverlay.addEventListener("click", (event) => {
  if (event.target === panelOverlay) {
    panelOverlay.classList.add("hidden");
  }
});

// =====================================
// THEME
// =====================================

const savedTheme = localStorage.getItem("percipeo-theme") || "light";

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeIcon() {
  const icon = document.querySelector("#themeToggle i");
  icon.className = document.body.classList.contains("dark")
    ? "fa-solid fa-sun"
    : "fa-regular fa-moon";
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "percipeo-theme",
    document.body.classList.contains("dark") ? "dark" : "light",
  );

  updateThemeIcon();
});

// =====================================
// MOBILE SIDEBAR
// =====================================

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((item) => item.classList.remove("active"));

    button.classList.add("active");
    document.getElementById("sidebar").classList.remove("open");
  });
});

// =====================================
// RESET FILTERS
// =====================================

document.getElementById("resetFilters").addEventListener("click", () => {
  currentSearch = "";
  selectedCategory = "All";
  currentView = "all";

  searchInput.value = "";
  sortSelect.value = "default";

  document.getElementById("recipesTitle").textContent = "Popular Recipes";

  renderRecipes();
});

// =====================================
// INITIALIZATION
// =====================================

renderRecipes();
updateCounts();
updateThemeIcon();

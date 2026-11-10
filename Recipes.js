(() => {
  "use strict";

  const PAGE_SIZE = 6;
  const VISIBLE_CHIPS = 9;
  const STORAGE_KEY = "savouria.saved.v1";
  const IMG_BASE = "https://i.pinimg.com/736x/";

  const PLACEHOLDER =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
        '<rect width="800" height="600" fill="#FFF8EF"/>' +
        '<circle cx="400" cy="272" r="62" fill="#A7AE83" opacity=".28"/>' +
        '<path d="M390 238h20v38l26 54h-18l-18-38-18 38h-18l26-54z" fill="#493A32" opacity=".55"/>' +
        '<text x="400" y="378" font-family="Georgia, serif" font-size="26" fill="#493A32" opacity=".55" text-anchor="middle">Savouria</text>' +
        '<text x="400" y="404" font-family="Helvetica, Arial, sans-serif" font-size="12" letter-spacing="3" fill="#493A32" opacity=".38" text-anchor="middle">IMAGE UNAVAILABLE</text>' +
        "</svg>",
    );

  const recipes = [
    {
      id: "savoury-ricotta-pancakes",
      title: "Savoury Ricotta Pancakes with Herbs",
      image: "00/63/f5/0063f58a4931c8739041557d1d11a2c4.jpg",
      category: "Quick & Easy",
      time: 40,
      difficulty: "Easy",
      rating: 4.8,
      reviews: 128,
      serves: 4,
      kcal: 485,
      desc: "Cloud-soft pancakes folded with ricotta, chives and lemon zest — the brunch plate that tastes like a slow Sunday morning.",
      chips: ["Cheese", "Eggs"],
      mainTypes: ["Breakfast"],
      dishType: "Pancakes",
      diets: ["Vegetarian"],
      occasions: ["Weekend brunch"],
      ingredients: [
        "1½ cups fresh ricotta",
        "2 large eggs, separated",
        "¾ cup all-purpose flour",
        "2 tbsp finely chopped chives",
        "1 tsp lemon zest",
        "½ tsp baking powder",
        "Butter, for the pan",
        "Crème fraîche and berries, to serve",
      ],
      steps: [
        "Whisk the ricotta, egg yolks, flour, chives, lemon zest and baking powder into a thick batter.",
        "Beat the egg whites to soft peaks and fold them through the batter in three additions.",
        "Cook in a buttered non-stick pan over medium heat, 2–3 minutes per side, until deeply golden.",
        "Stack onto warm plates and finish with crème fraîche, berries and a little cracked pepper.",
      ],
    },
    {
      id: "sweet-peppers-muhammara",
      title: "Sweet Peppers with Muhammara & Blue Cheese",
      image: "ce/5a/4e/ce5a4ebd5c62c65c9461efecfc8322e5.jpg",
      category: "One-Pot Recipes",
      time: 35,
      difficulty: "Easy",
      rating: 4.6,
      reviews: 94,
      serves: 4,
      kcal: 320,
      desc: "Blistered sweet peppers, smoky walnut muhammara and pockets of blue cheese — a sheet-pan dinner that eats like a mezze table.",
      chips: ["Peppers", "Cheese"],
      mainTypes: ["Dinner"],
      dishType: "Roast",
      diets: ["Vegetarian"],
      occasions: ["Weeknight", "Party"],
      ingredients: [
        "4 romano peppers, halved",
        "1 cup muhammara",
        "120 g blue cheese",
        "2 tbsp olive oil",
        "1 tsp smoked paprika",
        "A handful of flat-leaf parsley",
        "Warm flatbread, to serve",
      ],
      steps: [
        "Heat the oven to 220°C and line a baking tray.",
        "Toss the peppers with olive oil, smoked paprika and a pinch of salt, then roast for 15 minutes.",
        "Spoon muhammara into each pepper half, crumble over the blue cheese and return to the oven for 8–10 minutes.",
        "Scatter with parsley and serve straight from the tray with warm flatbread.",
      ],
    },
    {
      id: "tomato-goat-cheese-toasts",
      title: "Tomato & Goat Cheese Toasts with Mint Drizzle",
      image: "05/a5/5d/05a55d47ed6fc2fbff0c8ec98a8dce0c.jpg",
      category: "Appetizers & Snacks",
      time: 15,
      difficulty: "Easy",
      rating: 4.9,
      reviews: 203,
      serves: 2,
      kcal: 210,
      desc: "Charred sourdough, whipped goat cheese and maple-roasted tomatoes finished with a bright mint oil. Fifteen minutes, no regrets.",
      chips: ["Tomato", "Cheese", "Basil"],
      mainTypes: ["Snack"],
      dishType: "Toast",
      diets: ["Vegetarian"],
      occasions: ["Party", "Weekend brunch"],
      ingredients: [
        "4 thick slices sourdough",
        "150 g soft goat cheese",
        "250 g cherry tomatoes",
        "1 tbsp maple syrup",
        "6 mint leaves",
        "3 tbsp olive oil",
        "1 small garlic clove",
        "Sea salt and black pepper",
      ],
      steps: [
        "Roast the tomatoes with maple syrup at 200°C for 12 minutes until they slump and caramelise.",
        "Whip the goat cheese with the grated garlic, a pinch of salt and a splash of olive oil.",
        "Toast the sourdough until charred at the edges, then spread generously with the whipped cheese.",
        "Blitz the mint with olive oil, spoon over the tomatoes and finish with flaky salt.",
      ],
    },
    {
      id: "miso-glazed-salmon",
      title: "Miso-Glazed Salmon with Asparagus",
      image: "f6/79/6d/f6796d24c8e0d1da16cd76a661d81b6a.jpg",
      category: "Quick & Easy",
      time: 25,
      difficulty: "Easy",
      rating: 4.7,
      reviews: 156,
      serves: 2,
      kcal: 520,
      desc: "Sticky miso glaze, blistered asparagus and a squeeze of lemon — a 25-minute dinner with restaurant energy.",
      chips: ["Fish", "Lemon"],
      mainTypes: ["Dinner"],
      dishType: "Roast",
      diets: ["High-protein"],
      occasions: ["Weeknight"],
      ingredients: [
        "2 salmon fillets",
        "2 tbsp white miso",
        "1 tbsp honey",
        "1 tbsp soy sauce",
        "300 g asparagus",
        "1 lemon",
        "1 tsp sesame seeds",
        "Olive oil",
      ],
      steps: [
        "Whisk the miso, honey and soy sauce into a thick glaze and brush it over the salmon.",
        "Toss the asparagus with olive oil and lay it beside the salmon on a lined tray.",
        "Roast at 200°C for 12 minutes, then flash under the grill for 3 minutes until the glaze bubbles.",
        "Finish with lemon, sesame seeds and a crack of black pepper.",
      ],
    },
    {
      id: "sweetcorn-coconut-soup",
      title: "Sweetcorn & Coconut Soup",
      image: "7e/c7/ea/7ec7ea730345ed501e0386a945f875cd.jpg",
      category: "One-Pot Recipes",
      time: 30,
      difficulty: "Easy",
      rating: 4.5,
      reviews: 87,
      serves: 4,
      kcal: 280,
      desc: "Sweet summer corn blitzed with coconut milk, ginger and lime — silky, golden and quietly addictive.",
      chips: ["Corn", "Coconut"],
      mainTypes: ["Lunch"],
      dishType: "Soup",
      diets: ["Vegetarian", "Vegan", "Gluten-free"],
      occasions: ["Weeknight", "Meal prep"],
      ingredients: [
        "4 corn cobs, kernels sliced off",
        "400 ml coconut milk",
        "1 onion, diced",
        "2 cm ginger, grated",
        "500 ml vegetable stock",
        "1 lime",
        "Coriander leaves",
        "Chilli oil, to finish",
      ],
      steps: [
        "Sweat the onion and ginger in a little oil until soft and translucent, about 5 minutes.",
        "Add the corn and stock, bring to a simmer and cook for 12 minutes.",
        "Blend with the coconut milk until completely silky, then season with lime juice and salt.",
        "Serve with coriander, a swirl of chilli oil and extra corn kernels.",
      ],
    },
    {
      id: "garden-greens-soup",
      title: "Garden Greens Soup with Basil Oil",
      image: "4a/fd/de/4afddedbf294451ae64a88fd7fd20452.jpg",
      category: "One-Pot Recipes",
      time: 35,
      difficulty: "Easy",
      rating: 4.4,
      reviews: 76,
      serves: 4,
      kcal: 190,
      desc: "Spinach, courgette and sweet peas simmered until tender, then finished with a glossy basil oil that smells like summer.",
      chips: ["Spinach", "Basil"],
      mainTypes: ["Lunch"],
      dishType: "Soup",
      diets: ["Vegetarian", "Vegan", "Gluten-free"],
      occasions: ["Meal prep"],
      ingredients: [
        "300 g spinach",
        "1 courgette, chopped",
        "200 g frozen peas",
        "1 leek, sliced",
        "700 ml vegetable stock",
        "1 garlic clove",
        "30 g basil leaves",
        "60 ml olive oil",
      ],
      steps: [
        "Sweat the leek and garlic in olive oil until sweet and soft, without colouring.",
        "Add the courgette and stock, simmer for 10 minutes, then add the peas and spinach for 4 minutes more.",
        "Blend until smooth and season generously with salt and black pepper.",
        "Blitz the basil with olive oil and a pinch of salt, then drizzle over each bowl.",
      ],
    },
    {
      id: "quinoa-sweet-potato-bowl",
      title: "Quinoa & Roasted Sweet Potato Bowl",
      image: "97/9d/58/979d58822e9e5bc850107f4dd877a739.jpg",
      category: "Everyday Bowls",
      time: 30,
      difficulty: "Easy",
      rating: 4.7,
      reviews: 142,
      serves: 2,
      kcal: 430,
      desc: "Crispy-edged sweet potato, fluffy quinoa, avocado and a lemon-tahini drizzle that ties the whole bowl together.",
      chips: ["Quinoa", "Sweet Potato", "Avocado"],
      mainTypes: ["Lunch"],
      dishType: "Bowl",
      diets: ["Vegetarian", "Vegan", "Gluten-free", "High-protein"],
      occasions: ["Weeknight", "Meal prep"],
      ingredients: [
        "1 cup quinoa, rinsed",
        "2 sweet potatoes, cubed",
        "1 avocado, sliced",
        "2 handfuls rocket",
        "2 tbsp tahini",
        "1 lemon",
        "1 tsp ground cumin",
        "2 tbsp pumpkin seeds",
      ],
      steps: [
        "Toss the sweet potato with cumin, olive oil and salt, then roast at 210°C for 25 minutes.",
        "Cook the quinoa in salted water for 12 minutes, drain and fluff with a fork.",
        "Whisk the tahini with lemon juice and enough water to make a pourable dressing.",
        "Build the bowls with rocket, quinoa and sweet potato, then add avocado, seeds and plenty of dressing.",
      ],
    },
    {
      id: "lemon-herb-chicken-skillet",
      title: "Creamy Lemon Herb Chicken Skillet",
      image: "53/da/13/53da131d9f5eaa86721648f9805774ca.jpg",
      category: "One-Pan Dinners",
      time: 35,
      difficulty: "Medium",
      rating: 4.8,
      reviews: 211,
      serves: 4,
      kcal: 540,
      desc: "Golden chicken breasts in a silky lemon-thyme pan sauce — one pan, thirty-five minutes, zero leftovers.",
      chips: ["Chicken", "Lemon", "Cheese"],
      mainTypes: ["Dinner"],
      dishType: "Skillet",
      diets: ["High-protein"],
      occasions: ["Weeknight"],
      ingredients: [
        "4 chicken breasts",
        "2 tbsp butter",
        "1 shallot, finely diced",
        "2 garlic cloves, minced",
        "200 ml double cream",
        "1 lemon, zest and juice",
        "1 tsp fresh thyme leaves",
        "30 g Parmesan, grated",
      ],
      steps: [
        "Season the chicken well and sear in butter over medium-high heat, 5–6 minutes per side. Rest on a plate.",
        "Soften the shallot and garlic in the same pan, then deglaze with lemon juice.",
        "Add the cream, thyme and lemon zest and simmer for 3 minutes until thickened.",
        "Stir in the Parmesan, return the chicken and its juices, and spoon the sauce over the top.",
      ],
    },
    {
      id: "one-pot-tomato-basil-pasta",
      title: "One-Pot Tomato & Basil Pasta",
      image: "6d/ea/d5/6dead5ce00f7b65fff6a33b028b41442.jpg",
      category: "Quick & Easy",
      time: 25,
      difficulty: "Easy",
      rating: 4.9,
      reviews: 318,
      serves: 4,
      kcal: 460,
      desc: "Cherry tomatoes, garlic and basil cooked down into a glossy sauce while the pasta drinks up everything in the pot.",
      chips: ["Pasta", "Tomato", "Basil"],
      mainTypes: ["Dinner"],
      dishType: "Pasta",
      diets: ["Vegetarian"],
      occasions: ["Weeknight"],
      ingredients: [
        "350 g spaghetti",
        "400 g cherry tomatoes, halved",
        "4 garlic cloves, sliced",
        "1 large bunch basil",
        "2 tbsp olive oil",
        "1 tsp chilli flakes",
        "40 g Parmesan, grated",
        "700 ml hot water",
      ],
      steps: [
        "Warm the garlic in olive oil until fragrant, then add the tomatoes and press them with a spoon.",
        "Add the pasta and hot water, and simmer for 12 minutes, stirring often so nothing catches.",
        "Tear in most of the basil, add the chilli flakes and season with salt and pepper.",
        "Finish off the heat with Parmesan, a drizzle of olive oil and the remaining basil leaves.",
      ],
    },
    {
      id: "golden-chickpea-curry",
      title: "Golden Chickpea Coconut Curry",
      image: "13/ce/8a/13ce8af104b17435174359df598a4de8.jpg",
      category: "One-Pot Recipes",
      time: 45,
      difficulty: "Easy",
      rating: 4.6,
      reviews: 175,
      serves: 4,
      kcal: 390,
      desc: "Turmeric, coconut and chickpeas simmered until thick and golden, with spinach folded in at the last minute.",
      chips: ["Chickpeas", "Coconut", "Spinach"],
      mainTypes: ["Dinner"],
      dishType: "Curry",
      diets: ["Vegetarian", "Vegan", "Gluten-free", "High-protein"],
      occasions: ["Weeknight", "Meal prep"],
      ingredients: [
        "2 x 400 g cans chickpeas, drained",
        "400 ml coconut milk",
        "1 onion, diced",
        "3 garlic cloves, crushed",
        "1 tbsp curry powder",
        "1 tsp ground turmeric",
        "200 g spinach",
        "1 lime",
        "Steamed rice, to serve",
      ],
      steps: [
        "Soften the onion and garlic in oil, then bloom the curry powder and turmeric for 30 seconds.",
        "Add the chickpeas and coconut milk, season and simmer gently for 20 minutes.",
        "Fold through the spinach and cook until just wilted, then finish with lime juice.",
        "Spoon over steamed rice with extra lime and a little coconut milk swirled on top.",
      ],
    },
    {
      id: "kale-quinoa-salad",
      title: "Kale & Quinoa Salad with Citrus Dressing",
      image: "4f/f5/9e/4ff59e75e72b702a18baa9d6f33b66a4.jpg",
      category: "Fresh Salads",
      time: 20,
      difficulty: "Easy",
      rating: 4.5,
      reviews: 98,
      serves: 2,
      kcal: 310,
      desc: "Massaged kale, jewel-like quinoa and a bright orange-miso dressing that gets better after ten minutes in the bowl.",
      chips: ["Quinoa", "Kale"],
      mainTypes: ["Lunch"],
      dishType: "Salad",
      diets: ["Vegetarian", "Vegan", "Gluten-free"],
      occasions: ["Meal prep", "Weeknight"],
      ingredients: [
        "1 bunch cavolo nero or kale",
        "1 cup cooked quinoa",
        "1 orange",
        "1 tbsp white miso",
        "2 tbsp olive oil",
        "1 tbsp apple cider vinegar",
        "Toasted almonds",
        "Pomegranate seeds",
      ],
      steps: [
        "Strip and shred the kale, then massage with olive oil and salt for 2 minutes until glossy and tender.",
        "Segment the orange over a bowl, catching the juice for the dressing.",
        "Whisk the orange juice with miso, vinegar and olive oil until emulsified.",
        "Toss the kale and quinoa with the dressing, then top with orange, almonds and pomegranate.",
      ],
    },
    {
      id: "honey-roasted-peaches",
      title: "Honey-Roasted Peaches with Whipped Cream",
      image: "a8/d4/10/a8d41059bde0e2d44cf47028671c0127.jpg",
      category: "Sweet Endings",
      time: 25,
      difficulty: "Easy",
      rating: 4.9,
      reviews: 164,
      serves: 4,
      kcal: 260,
      desc: "Amber peaches roasted in honey and thyme, spooned over cold whipped cream — summer on a plate.",
      chips: ["Peach", "Honey", "Cream"],
      mainTypes: ["Dessert"],
      dishType: "Dessert",
      diets: ["Vegetarian"],
      occasions: ["Party", "Weekend brunch"],
      ingredients: [
        "4 ripe peaches, halved",
        "2 tbsp runny honey",
        "1 tsp thyme leaves",
        "1 tbsp butter",
        "250 ml double cream",
        "1 tsp vanilla extract",
        "2 tbsp pistachios, crushed",
        "Flaky sea salt",
      ],
      steps: [
        "Halve the peaches and nestle them cut-side up in a baking dish.",
        "Drizzle with honey, dot with butter, scatter with thyme and roast at 200°C for 15 minutes.",
        "Whip the cream with vanilla and a pinch of salt until it just holds soft peaks.",
        "Spoon the warm peaches and their juices over the cream and finish with pistachios.",
      ],
    },
  ];

  const CHIP_POOL = [
    "Eggs",
    "Cheese",
    "Tomato",
    "Basil",
    "Fish",
    "Chicken",
    "Quinoa",
    "Sweet Potato",
    "Lemon",
    "Corn",
    "Cream",
    "Spinach",
    "Avocado",
    "Pasta",
    "Chickpeas",
    "Coconut",
    "Kale",
    "Peach",
    "Honey",
    "Peppers",
  ];

  const filterGroups = [
    {
      key: "mainType",
      label: "Main Type",
      defaultOpen: true,
      options: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
    },
    {
      key: "dishType",
      label: "Dish Type",
      defaultOpen: true,
      options: [
        "Pancakes",
        "Soup",
        "Salad",
        "Toast",
        "Pasta",
        "Curry",
        "Bowl",
        "Roast",
        "Skillet",
        "Dessert",
      ],
    },
    {
      key: "timeBucket",
      label: "Cooking Time",
      defaultOpen: true,
      options: [
        { value: "under-20", label: "Under 20 min" },
        { value: "20-40", label: "20–40 min" },
        { value: "40-plus", label: "40+ min" },
      ],
    },
    {
      key: "diet",
      label: "Diet",
      defaultOpen: false,
      options: ["Vegetarian", "Vegan", "Gluten-free", "High-protein"],
    },
    {
      key: "ingredient",
      label: "Key Ingredients",
      defaultOpen: false,
      options: [
        "Cheese",
        "Eggs",
        "Fish",
        "Chicken",
        "Quinoa",
        "Sweet Potato",
        "Tomato",
        "Basil",
        "Lemon",
        "Corn",
        "Spinach",
        "Chickpeas",
        "Pasta",
      ],
    },
    {
      key: "occasion",
      label: "Occasion",
      defaultOpen: false,
      options: ["Weeknight", "Weekend brunch", "Meal prep", "Party"],
    },
  ];

  recipes.forEach((recipe) => {
    recipe.timeBucket =
      recipe.time < 20 ? "under-20" : recipe.time <= 40 ? "20-40" : "40-plus";
  });

  const state = {
    search: "",
    chip: "All",
    savedOnly: false,
    sort: "featured",
    visible: PAGE_SIZE,
    rendered: 0,
    filtered: recipes.slice(),
    groups: {
      mainType: new Set(),
      dishType: new Set(),
      timeBucket: new Set(),
      diet: new Set(),
      ingredient: new Set(),
      occasion: new Set(),
    },
  };

  let currentRecipe = null;
  let ingNotified = false;
  let loadToken = 0;

  const saved = new Set(loadSaved());

  /* ---------- DOM -------------------------------------------------------- */

  const els = {
    grid: document.getElementById("recipesGrid"),
    empty: document.getElementById("emptyState"),
    count: document.getElementById("resultsCount"),
    chipRow: document.getElementById("chipRow"),
    chipMore: document.getElementById("chipMore"),
    loadMore: document.getElementById("loadMore"),
    loadWrap: document.querySelector(".load-wrap"),
    sort: document.getElementById("sortSelect"),
    savedBtn: document.getElementById("savedBtn"),
    savedCount: document.getElementById("savedCount"),
    savedToggle: document.getElementById("savedToggle"),
    savedToggleCount: document.getElementById("savedToggleCount"),
    mobileFilterCount: document.getElementById("mobileFilterCount"),
    toTop: document.getElementById("toTop"),
    toastStack: document.getElementById("toastStack"),
    modalEl: document.getElementById("recipeModal"),
    drawerEl: document.getElementById("filterDrawer"),
    applyFilters: document.getElementById("applyFilters"),
  };

  /* ---------- Helpers ---------------------------------------------------- */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  const esc = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );

  const debounce = (fn, wait) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), wait);
    };
  };

  function loadSaved() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (error) {
      return [];
    }
  }

  function persistSaved() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(saved)));
    } catch (error) {
      /* storage is optional */
    }
  }

  function highlight(text) {
    const safe = esc(text);
    const query = state.search.trim();
    if (!query) return safe;
    const pattern = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    return safe.replace(pattern, "<mark>$1</mark>");
  }

  function optionValue(option) {
    return typeof option === "string" ? option : option.value;
  }

  function optionLabel(option) {
    return typeof option === "string" ? option : option.label;
  }

  function countOption(key, value) {
    return recipes.filter((recipe) => {
      if (key === "mainType") return recipe.mainTypes.includes(value);
      if (key === "dishType") return recipe.dishType === value;
      if (key === "timeBucket") return recipe.timeBucket === value;
      if (key === "diet") return recipe.diets.includes(value);
      if (key === "ingredient") return recipe.chips.includes(value);
      if (key === "occasion") return recipe.occasions.includes(value);
      return false;
    }).length;
  }

  /* ---------- Toasts ----------------------------------------------------- */

  function toast(message, icon = "fa-circle-check", duration = 3200) {
    const note = document.createElement("div");
    note.className = "toast-note";
    note.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${esc(message)}</span>
      <button type="button" aria-label="Dismiss notification"><i class="fa-solid fa-xmark"></i></button>`;

    const dismiss = () => {
      if (!note.isConnected || note.classList.contains("is-out")) return;
      note.classList.add("is-out");
      setTimeout(() => note.remove(), 360);
    };

    note.querySelector("button").addEventListener("click", dismiss);

    const stack = els.toastStack;
    stack.appendChild(note);
    while (stack.children.length > 3) stack.firstElementChild.remove();
    setTimeout(dismiss, duration);
  }

  /* ---------- Filter panel ----------------------------------------------- */

  function panelTemplate() {
    return `
      <h2 class="sidebar-title">What’s in<br>Your Fridge?</h2>
      <div class="search-box${state.search ? " has-value" : ""}">
        <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <input type="search" data-search placeholder="Search..." aria-label="Search recipes" autocomplete="off" value="${esc(state.search)}">
        <button type="button" class="search-clear" data-search-clear aria-label="Clear search"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="filter-bar">
        <h3>Filter by</h3>
        <button type="button" class="link-clear" data-clear-all>Clear all</button>
      </div>
      <div class="active-filters" data-active-filters></div>
      <div class="filter-groups" data-groups></div>`;
  }

  function buildPanel(root) {
    root.innerHTML = panelTemplate();
    const groupWrap = $("[data-groups]", root);

    groupWrap.innerHTML = filterGroups
      .map((group) => {
        const checks = group.options
          .map((option) => {
            const value = optionValue(option);
            return `
          <label class="check">
            <input type="checkbox" data-filter-group="${group.key}" value="${esc(value)}">
            <span class="check__box"><i class="fa-solid fa-check"></i></span>
            <span class="check__label">${esc(optionLabel(option))}</span>
            <span class="check__count">${countOption(group.key, value)}</span>
          </label>`;
          })
          .join("");

        return `
        <div class="acc${group.defaultOpen ? " is-open" : ""}" data-group-box="${group.key}">
          <button type="button" class="acc__head" data-acc-toggle aria-expanded="${group.defaultOpen}">
            <span>${esc(group.label)}<span class="acc__badge" data-group-badge="${group.key}">0</span></span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="acc__body">
            <div class="acc__inner"><div class="checks">${checks}</div></div>
          </div>
        </div>`;
      })
      .join("");
  }

  function activeTags() {
    const tags = [];
    if (state.search) tags.push({ type: "search", label: state.search });
    if (state.savedOnly) tags.push({ type: "saved", label: "Saved recipes" });
    filterGroups.forEach((group) => {
      state.groups[group.key].forEach((value) => {
        const match = group.options.find(
          (option) => optionValue(option) === value,
        );
        tags.push({
          type: "group",
          key: group.key,
          value,
          label: optionLabel(match),
        });
      });
    });
    return tags;
  }

  function anyFilterActive() {
    return (
      Boolean(state.search) ||
      state.chip !== "All" ||
      state.savedOnly ||
      Object.values(state.groups).some((set) => set.size > 0)
    );
  }

  function syncPanel(root) {
    $$("input[data-filter-group]", root).forEach((input) => {
      input.checked = state.groups[input.dataset.filterGroup].has(input.value);
    });

    $$("[data-group-badge]", root).forEach((badge) => {
      const total = state.groups[badge.dataset.groupBadge].size;
      badge.textContent = total;
      badge.classList.toggle("is-on", total > 0);
    });

    const tags = activeTags();
    $$("[data-active-filters]", root).forEach((box) => {
      box.innerHTML = tags
        .map((tag) => {
          if (tag.type === "search") {
            return `<button type="button" class="active-tag" data-remove-type="search">“${esc(tag.label)}”<i class="fa-solid fa-xmark"></i></button>`;
          }
          if (tag.type === "saved") {
            return `<button type="button" class="active-tag" data-remove-type="saved">${esc(tag.label)}<i class="fa-solid fa-xmark"></i></button>`;
          }
          return `<button type="button" class="active-tag" data-remove-type="group" data-remove-key="${tag.key}" data-remove-value="${esc(tag.value)}">${esc(tag.label)}<i class="fa-solid fa-xmark"></i></button>`;
        })
        .join("");
    });

    const clear = $("[data-clear-all]", root);
    if (clear) {
      const disabled = !anyFilterActive();
      clear.disabled = disabled;
      clear.classList.toggle("is-disabled", disabled);
    }

    const search = $("input[data-search]", root);
    if (search && document.activeElement !== search) {
      search.value = state.search;
    }
    const box = $(".search-box", root);
    if (box) box.classList.toggle("has-value", Boolean(state.search));
  }

  function syncPanels() {
    $$("[data-filter-root]").forEach(syncPanel);
  }

  function updateBadges() {
    const active =
      Object.values(state.groups).reduce((sum, set) => sum + set.size, 0) +
      (state.search ? 1 : 0) +
      (state.chip !== "All" ? 1 : 0) +
      (state.savedOnly ? 1 : 0);

    els.mobileFilterCount.textContent = active;
    els.mobileFilterCount.classList.toggle("is-on", active > 0);

    const label =
      state.filtered.length === 1
        ? "Show 1 recipe"
        : `Show ${state.filtered.length} recipes`;
    const span = els.applyFilters
      ? els.applyFilters.querySelector("span")
      : null;
    if (span) span.textContent = label;
  }

  /* ---------- Chips ------------------------------------------------------ */

  function renderChips() {
    const chips = ["All", ...CHIP_POOL];
    els.chipRow.innerHTML = chips
      .map((chip, index) => {
        const extra = chip !== "All" && index > VISIBLE_CHIPS;
        return `<button type="button" class="chip${extra ? " chip--extra" : ""}" data-chip="${esc(chip)}" style="--d:${index * 22}ms" aria-pressed="false">${esc(chip)}</button>`;
      })
      .join("");
  }

  function syncChips() {
    $$(".chip[data-chip]", els.chipRow).forEach((chip) => {
      const on = chip.dataset.chip === state.chip;
      chip.classList.toggle("is-active", on);
      chip.setAttribute("aria-pressed", String(on));
    });
  }

  function selectChip(value) {
    state.chip = value === "All" ? "All" : state.chip === value ? "All" : value;
    applyFilters();
  }

  function toggleChipMore() {
    const expanded = els.chipRow.classList.toggle("is-expanded");
    els.chipMore.classList.toggle("is-open", expanded);
    els.chipMore.setAttribute("aria-expanded", String(expanded));
    els.chipMore.querySelector("span").textContent = expanded
      ? "Show less"
      : "Show more";

    if (!expanded && state.chip !== "All") {
      const primaryChips = CHIP_POOL.slice(0, VISIBLE_CHIPS);
      if (!primaryChips.includes(state.chip)) {
        state.chip = "All";
        applyFilters();
      }
    }
  }

  /* ---------- Filtering & rendering -------------------------------------- */

  function matches(recipe) {
    if (state.search) {
      const haystack = [
        recipe.title,
        recipe.category,
        recipe.desc,
        ...recipe.chips,
        ...recipe.ingredients,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(state.search.trim().toLowerCase())) return false;
    }

    if (state.chip !== "All" && !recipe.chips.includes(state.chip))
      return false;
    if (state.savedOnly && !saved.has(recipe.id)) return false;

    const groups = state.groups;
    if (
      groups.mainType.size &&
      !recipe.mainTypes.some((item) => groups.mainType.has(item))
    )
      return false;
    if (groups.dishType.size && !groups.dishType.has(recipe.dishType))
      return false;
    if (groups.timeBucket.size && !groups.timeBucket.has(recipe.timeBucket))
      return false;
    if (groups.diet.size && !recipe.diets.some((item) => groups.diet.has(item)))
      return false;
    if (
      groups.ingredient.size &&
      !recipe.chips.some((item) => groups.ingredient.has(item))
    )
      return false;
    if (
      groups.occasion.size &&
      !recipe.occasions.some((item) => groups.occasion.has(item))
    )
      return false;

    return true;
  }

  function cardTemplate(recipe, index) {
    const isSaved = saved.has(recipe.id);
    return `
      <article class="recipe-card" data-id="${recipe.id}" style="--d:${Math.min(index, 9) * 55}ms">
        <div class="card-media" data-quick="${recipe.id}">
          <img src="${IMG_BASE}${recipe.image}" alt="${esc(recipe.title)}" loading="lazy" width="736" height="552">
          <div class="media-veil">
            <button type="button" class="quick-btn" data-quick="${recipe.id}">
              <i class="fa-solid fa-eye"></i> Quick view
            </button>
          </div>
          <button type="button" class="fav${isSaved ? " is-saved" : ""}" data-fav="${recipe.id}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove" : "Save"} ${esc(recipe.title)} from your recipe box">
            <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
        </div>
        <div class="card-body">
          <p class="card-meta">
            <span>${esc(recipe.category)}</span>
            <span class="dot" aria-hidden="true"></span>
            <span>${recipe.time} mins</span>
            <span class="rate"><i class="fa-solid fa-star" aria-hidden="true"></i>${recipe.rating.toFixed(1)}</span>
          </p>
          <h3 class="card-title">
            <button type="button" data-quick="${recipe.id}">${highlight(recipe.title)}</button>
          </h3>
        </div>
      </article>`;
  }

  function sortFiltered() {
    if (state.sort === "quickest") {
      state.filtered.sort((a, b) => a.time - b.time);
    } else if (state.sort === "rated") {
      state.filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sort === "az") {
      state.filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  function statusMarkup() {
    const total = state.filtered.length;
    const shown = state.rendered;
    if (!total) return "No recipes found";
    if (state.savedOnly) {
      return `Showing <strong>${shown}</strong> of ${total} saved recipe${total === 1 ? "" : "s"}`;
    }
    if (shown < total) {
      return `Showing <strong>${shown}</strong> of ${total} recipes`;
    }
    if (state.search) {
      return `<strong>${total}</strong> recipe${total === 1 ? "" : "s"} matching “${esc(state.search)}”`;
    }
    return `<strong>${total}</strong> recipe${total === 1 ? "" : "s"}`;
  }

  function updateStatus() {
    els.count.innerHTML = statusMarkup();
    els.count.classList.remove("is-bump");
    void els.count.offsetWidth;
    els.count.classList.add("is-bump");

    const remaining = state.filtered.length - state.rendered;
    const wrap = els.loadWrap;
    if (wrap) wrap.hidden = remaining <= 0;
    if (els.loadMore) {
      els.loadMore.disabled = false;
      els.loadMore.classList.remove("is-loading");
      els.loadMore.querySelector("span").textContent =
        `Load ${Math.min(PAGE_SIZE, remaining)} more`;
      els.loadMore.querySelector("i").className = "fa-solid fa-arrow-down";
    }
  }

  function renderEmpty() {
    const emptySaved = state.savedOnly && saved.size === 0;
    els.empty.innerHTML = `
      <div class="empty-icon"><i class="fa-solid ${emptySaved ? "fa-heart" : "fa-magnifying-glass"}"></i></div>
      <h2>${emptySaved ? "Your recipe box is empty" : "Nothing in the fridge matches"}</h2>
      <p>${
        emptySaved
          ? "Tap the heart on any recipe and it will be waiting for you right here."
          : "Try another ingredient, or loosen a filter or two — something good is always close."
      }</p>
      <button type="button" class="btn btn-outline-brown" data-empty-action>${emptySaved ? "Browse all recipes" : "Clear all filters"}</button>
      ${
        emptySaved
          ? ""
          : `<p class="empty-hint">Popular right now:
            <button type="button" class="link-inline" data-chip="Tomato">Tomato</button>,
            <button type="button" class="link-inline" data-chip="Cheese">Cheese</button>,
            <button type="button" class="link-inline" data-chip="Quinoa">Quinoa</button>
          </p>`
      }`;
  }

  function renderGrid({ append = false } = {}) {
    const start = append ? state.rendered : 0;
    const slice = state.filtered.slice(start, state.visible);

    if (!append) {
      els.grid.innerHTML = "";
      state.rendered = 0;
    }

    if (slice.length) {
      els.grid.insertAdjacentHTML(
        "beforeend",
        slice
          .map((recipe, index) => cardTemplate(recipe, state.rendered + index))
          .join(""),
      );
    }

    state.rendered += slice.length;

    els.grid.hidden = state.rendered === 0;
    els.empty.hidden = state.rendered !== 0;
    if (state.rendered === 0) renderEmpty();

    updateStatus();
    syncSavedUI();
  }

  function applyFilters() {
    loadToken += 1;
    state.filtered = recipes.filter(matches);
    sortFiltered();
    state.visible = PAGE_SIZE;
    renderGrid();
    syncPanels();
    syncChips();
    updateBadges();
  }

  /* ---------- Saved ------------------------------------------------------ */

  function syncSavedUI() {
    els.savedCount.textContent = saved.size;
    els.savedCount.classList.toggle("is-on", saved.size > 0);
    els.savedToggleCount.textContent = saved.size;
    els.savedToggle.classList.toggle("is-active", state.savedOnly);
    els.savedToggle.setAttribute("aria-pressed", String(state.savedOnly));

    $$("[data-fav]").forEach((button) => {
      const on = saved.has(button.dataset.fav);
      const icon = button.querySelector("i");
      button.classList.toggle("is-saved", on);
      button.setAttribute("aria-pressed", String(on));
      if (icon) {
        icon.classList.toggle("fa-solid", on);
        icon.classList.toggle("fa-regular", !on);
      }
      button.setAttribute(
        "aria-label",
        `${on ? "Remove" : "Save"} ${button.dataset.fav.replace(/-/g, " ")} ${on ? "from" : "to"} your recipe box`,
      );
    });

    syncModalSave();
    updateBadges();
  }

  function toggleFav(id) {
    const wasSaved = saved.has(id);
    if (wasSaved) saved.delete(id);
    else saved.add(id);

    persistSaved();

    const buttons = $$(`[data-fav="${id}"]`);
    if (!wasSaved) {
      buttons.forEach((button) => {
        button.classList.remove("pop");
        void button.offsetWidth;
        button.classList.add("pop");
      });
    }

    if (state.savedOnly) applyFilters();
    else syncSavedUI();

    toast(
      wasSaved
        ? "Removed from your recipe box"
        : "Saved — find it under the heart in the header",
      wasSaved ? "fa-heart-crack" : "fa-heart",
    );
  }

  function openSaved() {
    clearAllFilters();
    state.savedOnly = true;
    applyFilters();
    scrollToResults();

    toast(
      saved.size
        ? `Showing ${saved.size} saved recipe${saved.size === 1 ? "" : "s"}`
        : "Nothing saved yet — tap the heart on a recipe to start your box",
      "fa-heart",
    );
  }

  function toggleSavedView() {
    state.savedOnly = !state.savedOnly;
    applyFilters();
    toast(
      state.savedOnly ? "Showing your saved recipes" : "Showing all recipes",
      "fa-heart",
    );
  }

  /* ---------- Recipe modal ----------------------------------------------- */

  const recipeModal = new bootstrap.Modal(els.modalEl);
  const drawer = new bootstrap.Offcanvas(els.drawerEl);

  function openRecipe(id) {
    const recipe = recipes.find((item) => item.id === id);
    if (!recipe) return;

    currentRecipe = recipe;
    ingNotified = false;

    const image = document.getElementById("mImage");
    delete image.dataset.fallback;
    image.src = `${IMG_BASE}${recipe.image}`;
    image.alt = recipe.title;

    document.getElementById("mCat").textContent = recipe.category;
    document.getElementById("mTitle").textContent = recipe.title;
    document.getElementById("mDesc").textContent = recipe.desc;
    document.getElementById("mTime").textContent = `${recipe.time} min`;
    document.getElementById("mServes").textContent = recipe.serves;
    document.getElementById("mRating").textContent = recipe.rating.toFixed(1);
    document.getElementById("mReviews").textContent =
      `${recipe.reviews} reviews`;
    document.getElementById("mKcal").textContent = recipe.kcal;
    document.getElementById("mBadge").textContent =
      `${recipe.time} min · ${recipe.difficulty}`;

    document.getElementById("mIngredients").innerHTML = recipe.ingredients
      .map(
        (ingredient) => `
      <li>
        <label class="check ing-check">
          <input type="checkbox" data-ing>
          <span class="check__box"><i class="fa-solid fa-check"></i></span>
          <span class="check__label">${esc(ingredient)}</span>
        </label>
      </li>`,
      )
      .join("");

    document.getElementById("mSteps").innerHTML = recipe.steps
      .map((step) => `<li>${esc(step)}</li>`)
      .join("");

    updateIngredientProgress();
    syncModalSave();

    const body = document.getElementById("mBody");
    if (body) body.scrollTop = 0;

    recipeModal.show();
  }

  function syncModalSave() {
    const button = document.getElementById("modalSave");
    if (!button) return;

    if (!currentRecipe) {
      button.innerHTML =
        '<i class="fa-regular fa-heart"></i><span>Save recipe</span>';
      button.classList.remove("is-saved");
      return;
    }

    const on = saved.has(currentRecipe.id);
    button.classList.toggle("is-saved", on);
    button.innerHTML = on
      ? '<i class="fa-solid fa-heart"></i><span>Saved to your box</span>'
      : '<i class="fa-regular fa-heart"></i><span>Save recipe</span>';
  }

  function updateIngredientProgress() {
    const items = $$("[data-ing]");
    const done = items.filter((item) => item.checked).length;
    const label = document.getElementById("ingProgressLabel");
    const bar = document.getElementById("ingProgressBar");

    label.textContent = `${done} / ${items.length}`;
    bar.style.width = items.length ? `${(done / items.length) * 100}%` : "0%";

    if (items.length && done === items.length && !ingNotified) {
      ingNotified = true;
      toast("Everything checked — happy cooking", "fa-utensils");
    }
    if (done < items.length) ingNotified = false;
  }

  /* ---------- Filters clear ---------------------------------------------- */

  function clearAllFilters() {
    state.search = "";
    state.chip = "All";
    state.savedOnly = false;
    Object.values(state.groups).forEach((set) => set.clear());
    $$("input[data-search]").forEach((input) => {
      input.value = "";
    });
    $$(".search-box").forEach((box) => box.classList.remove("has-value"));
  }

  function clearAll() {
    clearAllFilters();
    applyFilters();
    toast("Filters cleared — the whole pantry is open", "fa-sliders");
  }

  /* ---------- Scroll helpers --------------------------------------------- */

  function scrollToResults() {
    const target = document.getElementById("resultsBar");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  let scrollTicking = false;

  function onScroll() {
    const y = window.scrollY;
    els.toTop.classList.toggle("is-on", y > 620);
  }

  window.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        onScroll();
        scrollTicking = false;
      });
    },
    { passive: true },
  );

  /* ---------- Events: static --------------------------------------------- */

  els.chipMore.addEventListener("click", toggleChipMore);

  els.savedBtn.addEventListener("click", openSaved);
  els.savedToggle.addEventListener("click", toggleSavedView);

  els.sort.addEventListener("change", () => {
    state.sort = els.sort.value;
    applyFilters();
  });

  els.loadMore.addEventListener("click", () => {
    const remaining = state.filtered.length - state.rendered;
    if (remaining <= 0 || els.loadMore.disabled) return;

    loadToken += 1;
    const token = loadToken;
    const add = Math.min(PAGE_SIZE, remaining);

    els.loadMore.disabled = true;
    els.loadMore.classList.add("is-loading");
    els.loadMore.querySelector("span").textContent = "Plating up…";
    els.loadMore.querySelector("i").className = "fa-solid fa-spinner";

    const skeletons = Array.from(
      { length: add },
      () => `
      <article class="recipe-card skeleton" aria-hidden="true">
        <div class="sk-img"></div>
        <div class="sk-line" style="width:52%"></div>
        <div class="sk-line" style="width:86%"></div>
        <div class="sk-line" style="width:64%"></div>
      </article>`,
    ).join("");

    els.grid.insertAdjacentHTML("beforeend", skeletons);

    setTimeout(() => {
      if (token !== loadToken) return;

      $$(".recipe-card.skeleton", els.grid).forEach((card) => card.remove());
      state.visible += add;
      renderGrid({ append: true });
      els.loadMore.disabled = false;
      els.loadMore.classList.remove("is-loading");
    }, 680);
  });

  els.toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("tonightBtn").addEventListener("click", () => {
    const pool = state.filtered.length ? state.filtered : recipes;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    toast(`Tonight’s pick: ${pick.title}`, "fa-wand-magic-sparkles", 2600);
    setTimeout(() => openRecipe(pick.id), 260);
  });

  document.getElementById("modalSave").addEventListener("click", () => {
    if (currentRecipe) toggleFav(currentRecipe.id);
  });

  document.getElementById("addToList").addEventListener("click", () => {
    if (!currentRecipe) return;
    toast(
      `${currentRecipe.ingredients.length} ingredients added to your shopping list`,
      "fa-basket-shopping",
    );
  });

  els.applyFilters.addEventListener("click", () => {
    drawer.hide();
    setTimeout(scrollToResults, 320);
  });

  window.addEventListener("keydown", (event) => {
    if (
      event.key === "/" &&
      !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)
    ) {
      const input = $$("input[data-search]").find(
        (item) => item.offsetParent !== null,
      );
      if (input) {
        event.preventDefault();
        input.focus();
        input.select();
      }
    }

    if (
      event.key === "Escape" &&
      document.activeElement.matches("input[data-search]")
    ) {
      state.search = "";
      $$("input[data-search]").forEach((input) => {
        input.value = "";
      });
      $$(".search-box").forEach((box) => box.classList.remove("has-value"));
      applyFilters();
      document.activeElement.blur();
    }
  });

  /* ---------- Events: delegated ------------------------------------------ */

  const runSearch = debounce(applyFilters, 220);

  document.addEventListener("input", (event) => {
    const input = event.target.closest("input[data-search]");
    if (!input) return;

    state.search = input.value;

    $$("input[data-search]").forEach((other) => {
      if (other !== input) other.value = input.value;
    });
    $$(".search-box").forEach((box) => {
      const field = $("input[data-search]", box);
      box.classList.toggle("has-value", Boolean(field && field.value));
    });

    runSearch();
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-ing]")) {
      updateIngredientProgress();
      return;
    }

    const checkbox = event.target.closest("input[data-filter-group]");
    if (!checkbox) return;

    const set = state.groups[checkbox.dataset.filterGroup];
    if (checkbox.checked) set.add(checkbox.value);
    else set.delete(checkbox.value);

    applyFilters();
  });

  document.addEventListener("click", (event) => {
    const searchClear = event.target.closest("[data-search-clear]");
    if (searchClear) {
      state.search = "";
      $$("input[data-search]").forEach((input) => {
        input.value = "";
      });
      $$(".search-box").forEach((box) => box.classList.remove("has-value"));
      applyFilters();
      return;
    }

    const soon = event.target.closest("[data-soon]");
    if (soon) {
      event.preventDefault();
      toast(
        `${soon.dataset.soon} is coming soon — the recipes are the good part`,
        "fa-arrow-right",
      );
      return;
    }

    const fav = event.target.closest("[data-fav]");
    if (fav) {
      event.preventDefault();
      toggleFav(fav.dataset.fav);
      return;
    }

    const quick = event.target.closest("[data-quick]");
    if (quick) {
      openRecipe(quick.dataset.quick);
      return;
    }

    const chip = event.target.closest("[data-chip]");
    if (chip) {
      selectChip(chip.dataset.chip);
      return;
    }

    const accordion = event.target.closest("[data-acc-toggle]");
    if (accordion) {
      const box = accordion.closest(".acc");
      const open = box.classList.toggle("is-open");
      accordion.setAttribute("aria-expanded", String(open));
      return;
    }

    const clear = event.target.closest("[data-clear-all]");
    if (clear) {
      clearAll();
      return;
    }

    const remove = event.target.closest("[data-remove-type]");
    if (remove) {
      if (remove.dataset.removeType === "search") {
        state.search = "";
        $$("input[data-search]").forEach((input) => {
          input.value = "";
        });
      } else if (remove.dataset.removeType === "saved") {
        state.savedOnly = false;
      } else {
        const set = state.groups[remove.dataset.removeKey];
        if (set) set.delete(remove.dataset.removeValue);
      }
      applyFilters();
      return;
    }

    const emptyAction = event.target.closest("[data-empty-action]");
    if (emptyAction) {
      clearAll();
    }
  });

  /* ---------- Image fallback --------------------------------------------- */

  document.addEventListener(
    "error",
    (event) => {
      const image = event.target;
      if (image.tagName !== "IMG" || image.dataset.fallback) return;
      image.dataset.fallback = "1";
      image.classList.add("is-missing");
      image.src = PLACEHOLDER;
    },
    true,
  );

  /* ---------- Reveal on scroll ------------------------------------------- */

  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((item) => observer.observe(item));
  }

  /* ---------- Init ------------------------------------------------------- */

  function init() {
    renderChips();
    $$("[data-filter-root]").forEach(buildPanel);
    syncSavedUI();
    applyFilters();
    initReveal();
    onScroll();
  }

  init();
})();

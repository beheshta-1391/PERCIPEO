<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chubby Recipes — Big Fat Cheesy Burger Recipes!</title>
    <style>
      :root {
        --bg: #ffffff;
        --card: #f7f7f7;
        --text: #161616;
        --muted: #7a7a7a;
        --accent: #ff6b2c;
        --accent2: #ff9f43;
        --line: #e8e8e8;
        --radius: 22px;
        --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        --maxw: 1200px;
      }
      body.dark {
        --bg: #0f1114;
        --card: #171a1f;
        --text: #f2f2f2;
        --muted: #9aa0a6;
        --line: #242830;
        --shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family:
          "Poppins",
          system-ui,
          -apple-system,
          Segoe UI,
          Roboto,
          sans-serif;
        background: var(--bg);
        color: var(--text);
        transition: 0.35s;
      }
      img {
        max-width: 100%;
        display: block;
      }
      button,
      input {
        font-family: inherit;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .wrap {
        max-width: var(--maxw);
        margin: 0 auto;
        padding: 0 18px;
      }

      /* ---------- HEADER ---------- */
      header {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(12px);
        background: color-mix(in srgb, var(--bg) 85%, transparent);
        border-bottom: 1px solid var(--line);
      }
      .nav {
        display: flex;
        align-items: center;
        gap: 18px;
        height: 68px;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 800;
        font-size: 20px;
      }
      .logo .mark {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--accent);
        color: #fff;
        font-weight: 900;
        box-shadow: 0 6px 16px rgba(255, 107, 44, 0.35);
      }
      .navlinks {
        display: flex;
        gap: 24px;
        margin-inline-start: auto;
        font-size: 15px;
        color: var(--muted);
      }
      .navlinks a {
        position: relative;
        padding: 6px 0;
      }
      .navlinks a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 0;
        background: var(--accent);
        transition: 0.3s;
      }
      .navlinks a:hover,
      .navlinks a.active {
        color: var(--text);
      }
      .navlinks a:hover::after {
        width: 100%;
      }
      .tools {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .iconbtn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--line);
        background: var(--card);
        cursor: pointer;
        display: grid;
        place-items: center;
        font-size: 16px;
        transition: 0.25s;
      }
      .iconbtn:hover {
        transform: translateY(-2px);
        border-color: var(--accent);
      }
      .burger {
        display: none;
      }

      .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        min-width: 19px;
        height: 19px;
        padding: 0 5px;
        border-radius: 999px;
        background: var(--accent);
        color: #fff;
        font-size: 11px;
        font-weight: 800;
        display: grid;
        place-items: center;
      }
      #cartBtn { position: relative; }
      .add-cart {
        margin-top: 13px;
        border: 0;
        border-radius: 999px;
        padding: 9px 15px;
        background: var(--accent);
        color: #fff;
        font: inherit;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: .2s;
      }
      .add-cart:hover { background: var(--accent2); transform: translateY(-2px); }
      .cart-items { display: grid; gap: 12px; margin: 18px 0; max-height: 240px; overflow: auto; }
      .cart-item {
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
        padding: 12px; border: 1px solid var(--line); border-radius: 14px; background: var(--card);
      }
      .cart-item strong { font-size: 14px; }
      .cart-item small { display: block; color: var(--muted); margin-top: 4px; }
      .qty-controls { display: flex; align-items: center; gap: 8px; }
      .qty-controls button {
        width: 28px; height: 28px; border: 1px solid var(--line); border-radius: 50%;
        background: var(--bg); color: var(--text); cursor: pointer; font-weight: 800;
      }
      .remove-item { border: 0; background: transparent; color: #d9534f; cursor: pointer; font-size: 18px; }
      .order-form { display: grid; gap: 10px; }
      .order-form input, .order-form textarea {
        width: 100%; padding: 12px 14px; border: 1px solid var(--line);
        border-radius: 12px; background: var(--card); color: var(--text); outline: none;
      }
      .order-form input:focus, .order-form textarea:focus { border-color: var(--accent); }
      .cart-empty { color: var(--muted); text-align: center; padding: 18px 0; }
      @media (max-width: 860px) {
        .cart-count { top: -4px; right: -4px; }
      }


      /* ---------- HERO ---------- */
      .hero {
        position: relative;
        margin: 26px 0 10px;
        border-radius: 30px;
        overflow: hidden;
        height: clamp(320px, 52vw, 520px);
        box-shadow: var(--shadow);
      }
      .hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: zoom 12s ease-in-out infinite alternate;
      }
      @keyframes zoom {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(1.12);
        }
      }
      .hero .shade {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.15),
          rgba(0, 0, 0, 0.65)
        );
      }
      .hero .content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        padding: 24px;
      }
      .hero h1 {
        font-size: clamp(28px, 6vw, 64px);
        font-weight: 900;
        line-height: 1.05;
        max-width: 900px;
        text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
        animation: up 0.8s both;
      }
      .hero h1 span {
        color: var(--accent2);
      }
      .hero p {
        margin: 16px 0 26px;
        font-size: clamp(14px, 2vw, 19px);
        opacity: 0.92;
        animation: up 0.9s 0.1s both;
      }
      .btn {
        border: 0;
        cursor: pointer;
        background: var(--accent);
        color: #fff;
        font-weight: 700;
        padding: 14px 30px;
        border-radius: 999px;
        font-size: 15px;
        transition: 0.25s;
        box-shadow: 0 10px 24px rgba(255, 107, 44, 0.35);
      }
      .btn:hover {
        transform: translateY(-3px);
        background: var(--accent2);
      }
      .btn.ghost {
        background: rgba(255, 255, 255, 0.16);
        box-shadow: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      @keyframes up {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }

      /* ---------- QUICK ICONS ---------- */
      .quick {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin: 30px 0 40px;
        flex-wrap: wrap;
      }
      .quick button {
        flex: 1;
        min-width: 88px;
        background: none;
        border: 0;
        cursor: pointer;
        color: var(--muted);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        transition: 0.25s;
      }
      .quick .ic {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--card);
        display: grid;
        place-items: center;
        font-size: 22px;
        border: 1px solid var(--line);
        transition: 0.25s;
      }
      .quick button:hover .ic {
        background: var(--accent);
        color: #fff;
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(255, 107, 44, 0.35);
      }
      .quick button.on .ic {
        background: var(--accent);
        color: #fff;
      }

      /* ---------- SECTION HEAD ---------- */
      .head {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 26px 0 18px;
        flex-wrap: wrap;
      }
      .head h2 {
        font-size: clamp(20px, 3vw, 30px);
        font-weight: 900;
      }
      .head .count {
        color: var(--muted);
        font-size: 14px;
      }
      .search {
        margin-inline-start: auto;
        position: relative;
      }
      .search input {
        background: var(--card);
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 11px 16px 11px 40px;
        width: 250px;
        outline: none;
        color: var(--text);
        transition: 0.25s;
      }
      .search input:focus {
        border-color: var(--accent);
        width: 300px;
      }
      .search span {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.6;
      }
      .chips {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 22px;
      }
      .chip {
        padding: 9px 18px;
        border-radius: 999px;
        border: 1px solid var(--line);
        background: var(--card);
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: 0.2s;
      }
      .chip:hover {
        border-color: var(--accent);
      }
      .chip.on {
        background: var(--accent);
        color: #fff;
        border-color: var(--accent);
      }

      /* ---------- GRID ---------- */
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 22px;
      }
      .card {
        background: var(--card);
        border-radius: var(--radius);
        overflow: hidden;
        border: 1px solid var(--line);
        cursor: pointer;
        transition: 0.3s;
        position: relative;
      }
      .card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow);
        border-color: transparent;
      }
      .thumb {
        height: 180px;
        overflow: hidden;
        position: relative;
      }
      .thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
      }
      .card:hover .thumb img {
        transform: scale(1.08);
      }
      .tag {
        position: absolute;
        top: 12px;
        left: 12px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 5px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.4px;
        backdrop-filter: blur(4px);
      }
      .fav {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 0;
        background: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font-size: 15px;
        transition: 0.2s;
        display: grid;
        place-items: center;
      }
      .fav:hover {
        transform: scale(1.12);
      }
      .fav.on {
        background: var(--accent);
        color: #fff;
      }
      .body {
        padding: 16px;
      }
      .body h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.35;
        margin-bottom: 8px;
      }
      .body p {
        color: var(--muted);
        font-size: 13px;
        line-height: 1.6;
        display: -webkit-box;
        /* -webkit- line- clamp: 2; */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .meta {
        display: flex;
        gap: 14px;
        margin-top: 12px;
        font-size: 12px;
        color: var(--muted);
      }

      /* ---------- FEATURE ---------- */
      .feature {
        margin: 60px 0;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 0;
        border-radius: 28px;
        overflow: hidden;
        box-shadow: var(--shadow);
        background: var(--card);
      }
      .feature img {
        width: 100%;
        height: 100%;
        min-height: 300px;
        object-fit: cover;
      }
      .feature .txt {
        padding: 38px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .feature h3 {
        font-size: clamp(20px, 3vw, 32px);
        font-weight: 900;
        margin: 12px 0;
      }
      .feature p {
        color: var(--muted);
        line-height: 1.8;
        margin-bottom: 22px;
      }
      .articles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 22px;
        margin-bottom: 70px;
      }
      .art {
        background: var(--card);
        border: 1px solid var(--line);
        border-radius: 20px;
        padding: 22px;
        transition: 0.3s;
      }
      .art:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow);
      }
      .art .dot {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: var(--accent);
        display: grid;
        place-items: center;
        color: #fff;
        font-size: 19px;
      }
      .art h4 {
        margin: 16px 0 8px;
        font-size: 17px;
      }
      .art p {
        color: var(--muted);
        font-size: 14px;
        line-height: 1.7;
      }

      /* ---------- MODAL ---------- */
      .modal {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        place-items: center;
        z-index: 99;
        padding: 20px;
      }
      .modal.open {
        display: grid;
      }
      .modal .box {
        background: var(--bg);
        border-radius: 26px;
        max-width: 560px;
        width: 100%;
        overflow: hidden;
        animation: pop 0.3s both;
        border: 1px solid var(--line);
      }
      @keyframes pop {
        from {
          transform: scale(0.9);
          opacity: 0;
        }
        to {
          transform: none;
          opacity: 1;
        }
      }
      .modal img {
        height: 250px;
        width: 100%;
        object-fit: cover;
      }
      .modal .inner {
        padding: 26px;
      }
      .modal h3 {
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 10px;
      }
      .modal p {
        color: var(--muted);
        line-height: 1.8;
      }
      .modal .close {
        position: absolute;
        top: 14px;
        right: 14px;
      }

      /* ---------- TOAST / FOOTER ---------- */
      .toast {
        position: fixed;
        bottom: 26px;
        left: 50%;
        transform: translate(-50%, 120%);
        z-index: 120;
        background: var(--text);
        color: var(--bg);
        padding: 13px 26px;
        border-radius: 999px;
        font-weight: 600;
        transition: 0.35s;
        box-shadow: var(--shadow);
      }
      .toast.show {
        transform: translate(-50%, 0);
      }
      footer {
        border-top: 1px solid var(--line);
        padding: 36px 0;
        margin-top: 40px;
      }
      .foot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        color: var(--muted);
        font-size: 14px;
      }
      .top {
        position: fixed;
        bottom: 22px;
        right: 22px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 0;
        background: var(--accent);
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: 0.3s;
        z-index: 60;
      }
      .top.show {
        opacity: 1;
        pointer-events: auto;
      }

      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: 0.7s;
      }
      .reveal.in {
        opacity: 1;
        transform: none;
      }

      @media (max-width: 980px) {
        /* Keep the logo on one side and the action buttons on the opposite side. */
        .nav {
          justify-content: space-between;
        }
        .tools {
          margin-inline-start: auto;
        }
        .navlinks {
          position: fixed;
          top: 68px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0;
          margin: 0;
          padding: 10px 22px 18px;
          background: var(--bg);
          border-bottom: 1px solid var(--line);
          box-shadow: var(--shadow);
          transform: translateY(-150%);
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s;
          z-index: 49;
        }
        .navlinks.open {
          transform: translateY(0);
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
        .navlinks a {
          display: block;
          padding: 13px 4px;
          border-bottom: 1px solid var(--line);
        }
        .navlinks a:last-child {
          border-bottom: 0;
        }
        .burger {
          display: grid;
          flex: 0 0 40px;
        }
        .feature {
          grid-template-columns: 1fr;
        }
        .search {
          margin: 0;
          width: 100%;
        }
        .search input,
        .search input:focus {
          width: 100%;
        }
      }

      /* Keep the same compact header layout on phones and small tablets. */
      .nav {
        min-width: 0;
      }
      .logo {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
      }
      .tools {
        flex: 0 0 auto;
      }
      @media (max-width: 520px) {
        .nav {
          gap: 8px;
          height: 64px;
        }
        .navlinks {
          top: 64px;
        }
        .logo {
          gap: 7px;
          font-size: 16px;
        }
        .logo .mark {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
        }
        .tools {
          gap: 6px;
        }
        .iconbtn,
        .burger {
          width: 34px;
          height: 34px;
          flex-basis: 34px;
          font-size: 14px;
        }
        .cart-count {
          min-width: 16px;
          height: 16px;
          font-size: 10px;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="wrap nav">
        <div class="logo"><span class="mark">P</span> PERCIPEO</div>
        <nav class="navlinks" id="navlinks">
          <a href="PERCIPEO_updated-1.html" class="active">Home</a>
          <a href="Recipes.html">Recipes</a>
          <a href="reclpeo.html">Recipeo</a>
          <a href="favorites.html">Favorite</a>
          <a href="far.html">Contact</a>
        </nav>
        <div class="tools">
          <button class="iconbtn" id="cartBtn" title="Shopping cart" aria-label="Shopping cart">🛒<span id="cartCount" class="cart-count">0</span></button>
          <button class="iconbtn" id="themeBtn" title="Toggle theme">🌙</button>
          <button class="iconbtn" id="favFilter" title="Show favorites">
            💖
          </button>
          <button class="iconbtn burger" id="burger">☰</button>
        </div>
      </div>
    </header>

    <main class="wrap">
      <!-- HERO -->
      <section class="hero" id="hero">
        <img
          id="heroImg"
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd9?w=1400&q=80"
          alt="Burger"
        />
        <div class="shade"></div>
        <div class="content">
          <h1 id="heroTitle">Big Fat Cheesy <span>Burger</span> Recipes!</h1>
          <p id="heroSub">
            Hand-smashed patties, molten cheddar, zero regrets.
          </p>
          <button class="btn" onclick="scrollToRecipes()">
            See Latest Recipes
          </button>
        </div>
      </section>

      <!-- QUICK ICONS -->
      <div class="quick" id="quick"></div>

      <!-- LATEST -->
      <section id="latest">
        <div class="head">
          <h2>Latest Recipes</h2>
          <span class="count" id="count"></span>
          <div class="search">
            <span>🔍</span>
            <input id="search" type="text" placeholder="Search recipes..." />
          </div>
        </div>
        <div class="chips" id="chips"></div>
        <div class="grid" id="grid"></div>
      </section>

      <!-- FEATURE -->
      <section class="feature reveal" id="feature">
        <img
          src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&q=80"
          alt="Pancakes"
        />
        <div class="txt">
          <span
            class="tag"
            style="
              position: static;
              background: var(--accent);
              display: inline-block;
            "
            >Editor's pick</span
          >
          <h3>The Ultimate Strawberry Pancake</h3>
          <p>
            Fluffy, cloud-soft pancakes layered with sun-warmed strawberries and
            a slow drizzle of maple. Weekend energy, ready in under 20 minutes —
            no stress, no flour clouds in the kitchen.
          </p>
          <button class="btn" id="featureBtn">Get the recipe</button>
        </div>
      </section>

      <!-- ARTICLES -->
      <h2
        style="
          margin: 20px 0 22px;
          font-size: clamp(20px, 3vw, 30px);
          font-weight: 900;
        "
      >
        From the Blog
      </h2>
      <div class="articles" id="articles"></div>
    </main>

    <footer>
      <div class="wrap foot">
        <div class="logo"><span class="mark">P</span> PERCIPEO</div>
        <div>© 2026 Chubby Recipes · Made with ❤️ by Beheshta</div>
      </div>
    </footer>

    <div class="modal" id="modal">
      <div class="box" style="position: relative">
        <button class="iconbtn close" id="closeModal">✕</button>
        <img id="mImg" src="" alt="" />
        <div class="inner">
          <h3 id="mTitle"></h3>
          <p id="mDesc"></p>
          <div class="meta" id="mMeta"></div>
          <div style="display: flex; gap: 10px; margin-top: 20px">
            <button class="btn" id="mFav">Save recipe</button>
            <button class="btn" id="mAddCart" type="button">Add to cart 🛒</button>
            <button
              class="btn ghost"
              id="mClose2"
              style="
                background: var(--card);
                color: var(--text);
                border: 1px solid var(--line);
                box-shadow: none;
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="cartModal">
      <div class="box" style="position: relative; max-width: 620px;">
        <div class="inner">
          <button class="iconbtn close" id="closeCart" type="button">✕</button>
          <h3>🛒 Your Shopping Cart</h3>
          <p>Review your selected dishes and send your order.</p>
          <div class="cart-items" id="cartItems"></div>
          <form class="order-form" id="orderForm">
            <input id="customerName" type="text" placeholder="Your name" required />
            <input id="customerPhone" type="tel" placeholder="Phone number" required />
            <textarea id="customerAddress" rows="2" placeholder="Delivery address" required></textarea>
            <textarea id="orderNote" rows="2" placeholder="Order note (optional)"></textarea>
            <button class="btn" type="submit">Send order</button>
          </form>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
    <button class="top" id="top">↑</button>

    <script>
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
        const cats = [
          "All",
          "Breakfast",
          "Main",
          "Dessert",
          "Soup",
          "Bookmarked",
        ];
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
          favorites.includes(id)
            ? "Saved to favorites ❤️"
            : "Removed from favorites",
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
          container.innerHTML = '<p class="cart-empty">Your cart is empty. Add a dish to get started.</p>';
          return;
        }
        container.innerHTML = cart.map((item) => `
          <div class="cart-item">
            <div><strong>${item.title}</strong><small>Quantity: ${item.qty}</small></div>
            <div class="qty-controls">
              <button type="button" data-minus="${item.id}" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button type="button" data-plus="${item.id}" aria-label="Increase quantity">+</button>
              <button type="button" class="remove-item" data-remove="${item.id}" aria-label="Remove item">×</button>
            </div>
          </div>
        `).join("");

        $$("[data-plus]").forEach((button) => button.onclick = () => changeCartQty(+button.dataset.plus, 1));
        $$("[data-minus]").forEach((button) => button.onclick = () => changeCartQty(+button.dataset.minus, -1));
        $$("[data-remove]").forEach((button) => button.onclick = () => {
          cart = cart.filter((item) => item.id !== +button.dataset.remove);
          updateCartCount();
          renderCart();
        });
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
        const orderDetails = cart.map((item) => `${item.title} × ${item.qty}`).join("\\n");
        const customer = $("#customerName").value.trim();
        const phone = $("#customerPhone").value.trim();
        const address = $("#customerAddress").value.trim();
        if (!customer || !phone || !address) return;

        // Front-end demo: show the submitted order confirmation.
        console.log("New order:", {
          customer, phone, address, note: $("#orderNote").value.trim(), items: orderDetails
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
    </script>
  </body>
</html>

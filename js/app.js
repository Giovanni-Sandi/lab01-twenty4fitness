const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

const logo = document.getElementById("logo");

const footerLogo = document.getElementById("footer-logo");

/* =========================
   CARGAR TEMA GUARDADO
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-mode");

  themeToggle.textContent = "☼";

  if (logo) {
    logo.src = "./img/logo/logo-light.png";
  }

  if (footerLogo) {
    footerLogo.src = "./img/logo/logo-light.png";
  }
} else {
  themeToggle.textContent = "☾";

  if (logo) {
    logo.src = "./img/logo/logo-dark.png";
  }

  if (footerLogo) {
    footerLogo.src = "./img/logo/logo-dark.png";
  }
}

/* =========================
   CAMBIAR TEMA
========================= */

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const isLightMode = body.classList.contains("light-mode");

  if (isLightMode) {
    localStorage.setItem("theme", "light");

    themeToggle.textContent = "☼";

    if (logo) {
      logo.src = "./img/logo/logo-light.png";
    }

    if (footerLogo) {
      footerLogo.src = "./img/logo/logo-light.png";
    }
  } else {
    localStorage.setItem("theme", "dark");

    themeToggle.textContent = "☾";

    if (logo) {
      logo.src = "./img/logo/logo-dark.png";
    }

    if (footerLogo) {
      footerLogo.src = "./img/logo/logo-dark.png";
    }
  }
});

/* OCULTAR NAVBAR AL BAJAR */

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide-navbar");
  } else {
    header.classList.remove("hide-navbar");
  }

  lastScroll = currentScroll;
});

/* MENU MOBILE */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", !expanded);
});

/* BOTON VOLVER ARRIBA */

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const accessibilityToggle = document.getElementById("accessibility-toggle");

const accessibilityPanel = document.getElementById("accessibility-panel");

const closeAccessibility = document.getElementById("close-accessibility");

accessibilityToggle.addEventListener("click", () => {
  accessibilityPanel.classList.toggle("active");
});

closeAccessibility.addEventListener("click", () => {
  accessibilityPanel.classList.remove("active");
});

const readPage = document.getElementById("read-page");

readPage.addEventListener("change", () => {
  if (readPage.checked) {
    const speech = new SpeechSynthesisUtterance(
      document.querySelector("main").innerText,
    );

    speech.lang = "es-ES";

    speechSynthesis.speak(speech);
  } else {
    speechSynthesis.cancel();
  }
});

/* ========================================= */
/* TAMAÑO DE TEXTO */
/* ========================================= */

let currentFontSize = 100;

const increaseFontButton = document.getElementById("increase-font");

const decreaseFontButton = document.getElementById("decrease-font");

const resetFontButton = document.getElementById("reset-font");

function updateFontSize() {
  document.documentElement.style.fontSize = `${currentFontSize}%`;
}

/* Aumentar */

increaseFontButton.addEventListener("click", () => {
  if (currentFontSize < 140) {
    currentFontSize += 10;

    updateFontSize();
  }
});

/* Disminuir */

decreaseFontButton.addEventListener("click", () => {
  if (currentFontSize > 80) {
    currentFontSize -= 10;

    updateFontSize();
  }
});

/* Restaurar */

resetFontButton.addEventListener("click", () => {
  currentFontSize = 100;

  updateFontSize();
});

/* ========================================= */
/* ALTO CONTRASTE */
/* ========================================= */

const contrastToggle = document.getElementById("contrast-toggle");

contrastToggle.addEventListener("change", () => {
  document.body.classList.toggle("high-contrast");
});

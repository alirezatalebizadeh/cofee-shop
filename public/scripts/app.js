const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
let submenu = document.querySelector(".submenu");
let submenuOpenBtn = document.querySelector(".submenu_open_btn");
let nav = document.querySelector(".nav");
let showNabBtn = document.querySelector(".show-nab-btn");
let closeNabBtn = document.querySelector(".close-nab-btn");
let overlay = document.querySelector(".overlay");
// ! cart section
let showCartBtn = document.querySelector(".show-cart-btn");
let closeCartBtn = document.querySelector(".close-cart-btn");
let cart = document.querySelector(".cart");

//! dark and light mode
toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  });
});

submenuOpenBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("submenu-open");
});

//! show cart and nav
function showNavMenu(value) {
  if (value === "cart") {
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");
    overlay.classList.add("overlay--open");
    overlay.addEventListener("click", () => {
      overlay.classList.remove("overlay--open");
      closeNavMenu("nav");
      closeNavMenu("cart");
    });
  } else if (value === "nav") {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--open");
    overlay.addEventListener("click", () => {
      overlay.classList.remove("overlay--open");
      closeNavMenu("nav");
      closeNavMenu("cart");
    });
  }
}

//! close nav and menu
function closeNavMenu(val) {
  if (val === "cart") {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--open");
  } else if (val === "nav") {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--open");
  }
}

//! show nav or cart
showNabBtn.addEventListener("click", () => {
  showNavMenu("nav");
});
showCartBtn.addEventListener("click", () => {
  showNavMenu("cart");
});

//! close nav or cart
closeNabBtn.addEventListener("click", () => {
  closeNavMenu("nav");
});
closeCartBtn.addEventListener("click", () => {
  closeNavMenu("cart");
});

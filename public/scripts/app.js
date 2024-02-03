const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
let submenu = document.querySelector(".submenu");
let submenuOpenBtn = document.querySelector(".submenu_open_btn");
let nav = document.querySelector(".nav");
let showNabBtn = document.querySelector(".show-nab-btn");
let closeNabBtn = document.querySelector(".close-nab-btn");
let overlay = document.querySelector(".overlay");

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

// !close navbar
function closeNavbar() {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay--open");
}

submenuOpenBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("submenu-open");
});

showNabBtn.addEventListener("click", () => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.add("overlay--open");
});

closeNabBtn.addEventListener("click", closeNavbar);
overlay.addEventListener("click", closeNavbar);

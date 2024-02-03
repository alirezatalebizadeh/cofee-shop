const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
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

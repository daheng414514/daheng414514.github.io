window.addEventListener("scroll", () => {
  const sidebar = document.querySelector(".leftbar");
  if (window.scrollY > 100) {
    sidebar.classList.add("hidden");
  } else {
    sidebar.classList.remove("hidden");
  }
});
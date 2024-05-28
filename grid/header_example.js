document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector("#search-bar-nav");

  searchIcon.addEventListener("click", function() {
      searchBar.classList.toggle("active");
  });
});

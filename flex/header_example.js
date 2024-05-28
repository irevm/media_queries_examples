document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector("#search-bar-aside");

  searchIcon.addEventListener("click", function() {
      searchBar.classList.toggle("active");
  });
});

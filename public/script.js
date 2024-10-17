document.addEventListener("DOMContentLoaded", function () {
  // Select hamburger menu icon and menu content
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
  const hamburgerMenuContent = document.getElementById("hamburgerMenu");

  // Toggle the menu visibility when hamburger icon is clicked
  hamburgerMenuIcon.addEventListener("click", function () {
    hamburgerMenuContent.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
  const hamburgerMenuContent = document.getElementById("hamburgerMenu");

  hamburgerMenuIcon.addEventListener("click", function () {
    hamburgerMenuContent.classList.toggle("open");
  });
});

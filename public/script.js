document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
  const hamburgerMenuContent = document.getElementById("hamburgerMenu");

  const resourcesLink = document.querySelector(".header-resources");
  const dropdown = document.querySelector(
    ".header-resources-dropdown-container"
  );

  hamburgerMenuIcon.addEventListener("click", function () {
    hamburgerMenuContent.classList.toggle("open");
  });

  function showDropdown() {
    dropdown.style.display = "block";
  }

  function hideDropdown() {
    dropdown.style.display = "none";
  }

  resourcesLink.addEventListener("mouseenter", showDropdown);
  resourcesLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!dropdown.matches(":hover")) {
        hideDropdown();
      }
    }, 200);
  });

  dropdown.addEventListener("mouseenter", showDropdown);
  dropdown.addEventListener("mouseleave", hideDropdown);
});

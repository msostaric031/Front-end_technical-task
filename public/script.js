document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
  const hamburgerMenuContent = document.getElementById("hamburgerMenu");

  const loginButtons = document.querySelectorAll(".login-btn-trigger");
  const signInButton = document.querySelector(".login-screen-btn");
  const bodyWrapper = document.querySelector(".body-wrapper");
  const loginSection = document.querySelector("#login");
  const header = document.querySelector(".header");

  const resourcesLink = document.querySelector(".header-resources");
  const dropdown = document.querySelector(
    ".header-resources-dropdown-container"
  );

  loginButtons.forEach((button) => {
    button.addEventListener("click", () => {
      bodyWrapper.style.display = "none";
      header.style.display = "none";

      loginSection.style.display = "flex";
    });
  });

  signInButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (email && password) {
      loginSection.style.display = "none";
      bodyWrapper.style.display = "block";
      header.style.display = "flex";
    } else {
      alert("Please enter both email and password.");
    }
  });

  hamburgerMenuContent.addEventListener("click", function () {});

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

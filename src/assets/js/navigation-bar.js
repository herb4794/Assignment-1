///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header of Nav-bar
const searchBtn = document.querySelector("nav .desktop-nav .link-search");
const closeBtn = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".search-container-overlay");
const shoppingBagBtn = document.querySelector("nav .desktop-nav .link-bag");
const shoppingBagContainer = document.querySelector(".shopping-bag-container");

searchBtn.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
});

shoppingBagBtn.addEventListener("click", () => {
  shoppingBagContainer.classList.toggle("hide");
  overlay.classList.toggle("show");
});

// Mobile Version - Header of Nav-bar

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");
const searchBar = document.querySelector(
  ".mobile-search-container .search-bar"
);
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(
  ".mobile-search-container .cancel-btn"
);
const mobileShoppingBagBtn = document.querySelector(
  "nav .mobile-nav .link-bag"
);
const mobileShoppingBagContainer = document.querySelector(
  ".mobile-shopping-bag-container"
);

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

searchInput.addEventListener("click", () => {
  searchBar.classList.add("active");
  nav.classList.add("move-up");
  desktopNav.classList.add("move-down");
});

cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
  nav.classList.remove("move-up");
  desktopNav.classList.remove("move-down");
});

mobileShoppingBagBtn.addEventListener("click", () => {
  mobileShoppingBagContainer.classList.toggle("hide");
  overlay.classList.toggle("show");
});

let userStatus = localStorage.getItem("admin");
let userData = JSON.parse(userStatus) || [];
console.log(userData);

function onLoadUserStatus() {
  let userStatus = localStorage.getItem("admin");
  let userData = JSON.parse(userStatus);
  console.log(userData.registrationUsername);
  document.querySelector(".userStatus").textContent =
    userData.registrationUsername;
}

onLoadUserStatus();
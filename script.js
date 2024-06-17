//toggel class active Menu//
const navbarNav = document.querySelector(".navbar-nav");
document;
// ketika menu di klik //
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Toggel Class Active Untuk Shopping Cart//
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar element//

const menu = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//Toggel Class Active Search form//
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// modal box//
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail.button");

// itemDetailButton.onclick = (e) => {
//   itemDetailModal.style.display = "flex";
//   e.preventDefault();
// };

// klik tombol close//
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

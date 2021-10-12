const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu-btn");
const iconClose = document.querySelector(".header__close");
const navigation = document.querySelector(".header__nav");

headerMenu.addEventListener("click", (evt) => {
  overlay.classList.add("overlay--active");
  navigation.classList.add("header__nav--show");
});

iconClose.addEventListener("click", (evt) => {
  overlay.classList.toggle("overlay--active");
  navigation.classList.toggle("header__nav--show");
});

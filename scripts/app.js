const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu-btn");
const iconClose = document.querySelector(".header__close");
const navigation = document.querySelector(".header__nav");
const headerCart = document.querySelector(".header__cart");
const checkOut = document.querySelector(".checkout");
const slidesMain = document.querySelectorAll(".main__slides");

overlay.addEventListener("click", (evt) => {
  evt.currentTarget.classList.remove("overlay--active");
  navigation.classList.remove("header__nav--show");
});

headerMenu.addEventListener("click", (evt) => {
  overlay.classList.add("overlay--active");
  navigation.classList.add("header__nav--show");
});

iconClose.addEventListener("click", (evt) => {
  overlay.classList.toggle("overlay--active");
  navigation.classList.toggle("header__nav--show");
});

headerCart.addEventListener("click", (evt) => {
  checkOut.classList.toggle("checkout--show");
});

slidesMain.forEach((slide) => {
  if (slide.classList.contains("main__slides--active")) {
    slide.style.display = "block";
  } else {
    slide.style.display = "none";
  }
});

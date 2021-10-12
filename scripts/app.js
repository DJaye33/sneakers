const headerMenu = document.querySelector(".header__menu-btn");
const iconClose = document.querySelector(".header__close");
const navigation = document.querySelector(".header__nav");

headerMenu.addEventListener("click", evt => {
    navigation.classList.add("header-nav--show");
});

iconClose.addEventListener("click", (evt) => {
  console.log("clicked");
});

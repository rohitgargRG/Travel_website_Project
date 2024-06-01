//Hamburger Navbar
const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");

burger.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});

//pop Up Js
const openPopUp = document.querySelector("#openPopUp");
const closePopUp = document.querySelector("#closePopUp");
const popUp = document.querySelector("#popUp");
openPopUp.addEventListener("click", () => {
  openPopUp.classList.add("open-popUp");
  popUp.classList.remove("hidden");
});
closePopUp.addEventListener("click", () => {
  closePopUp.classList.remove("open-popUp");
  popUp.classList.add("hidden");
});
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
let written = false;

const sendButton = document.querySelector("#openPopUp");
const closePopUp = document.querySelector("#closePopUp");
const popUp = document.querySelector("#popUp");
const wrongPopUp = document.querySelector("#wrongPopUp");
const wrongClosePopUp = document.querySelector("#wrongClosePopUp");
const emailInput = document.querySelector("#mail");

sendButton.addEventListener("click", ()=> {
  if (emailInput.value.trim() === "") {
    sendButton.classList.add("open-popUp");
    wrongPopUp.classList.remove("hidden");
    written = false;
  } else {
    written = true;
    sendButton.classList.add("open-popUp");
    popUp.classList.remove("hidden");
  }
});

closePopUp.addEventListener("click", () => {
  closePopUp.classList.remove("open-popUp");
  popUp.classList.add("hidden");
});
wrongClosePopUp.addEventListener("click", () => {
  wrongClosePopUp.classList.remove("open-popUp");
  wrongPopUp.classList.add("hidden");
});



//More explore
const toggleButton = document.getElementById("toggleButton");
const toggleIcon = document.getElementById("toggleIcon");
const extraCards = document.querySelectorAll(".extra-card");
let isExpanded = false;

toggleButton.addEventListener("click", () => {
  extraCards.forEach((card) => {
    card.classList.toggle("hidden");
  });
  isExpanded = !isExpanded;
  toggleIcon.src = isExpanded
    ? "../media/up-arrow.jpg"
    : "../media/down-arrow.jpg";
});

// merchandise section
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      products.forEach((product) => {
        if (filter === "all") {
          product.classList.remove("hidden");
        } else {
          if (product.classList.contains(filter)) {
            product.classList.remove("hidden");
          } else {
            product.classList.add("hidden");
          }
        }
      });
    });

  });
});

// Scroll reveal animation


document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(
    ".navY, .letB ,.packB,.servB,.revB,.footB, .arrows,.productsL,.serH,.cardup",
    {
      origin: "bottom",
      distance: "40px",
      duration: 1500,
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    }
  );

  ScrollReveal().reveal(
    ".ExpT, .letL,.packL,.servL,.imgL,.revL, .exploreR,.travelT,.serL,.logotr",
    {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    }
  );

  ScrollReveal().reveal(
    ".ExpR,.packR, .servR,.imgR,.revR,.card,.traveltagT,.serR",
    {
      origin: "right",
      distance: "50px",
      duration: 1500,
      delay: 300,
      easing: "ease-in-out",
      reset: true,
    }
  );
});


const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");

burger.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});

// Scroll reveal animation

document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.navY, .letB ,.packB', {
      origin: 'bottom',
      distance: '40px',
      duration: 1500,
      delay: 200,
      easing: 'ease-in-out',
      reset: true
  });

  ScrollReveal().reveal('.ExpT, .letL,.packL', {
    origin: 'left',
    distance: '50px',
    duration: 1500,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('.ExpR,.packR', {
  origin: 'right',
  distance: '50px',
  duration: 1500,
  delay: 300,
  easing: 'ease-in-out',
  reset: true
});
});

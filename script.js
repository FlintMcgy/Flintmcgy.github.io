// script.js
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const animatedText = document.querySelector(".animated-text");

  if (prevScrollpos > currentScrollPos) {
    animatedText.style.opacity = "1";
    animatedText.style.animation = "fadeInUp 0.5s ease-out";
  } else {
    animatedText.style.opacity = "0";
    animatedText.style.animation = "fadeOutDown 0.5s ease-out";
  }

  prevScrollpos = currentScrollPos;
};

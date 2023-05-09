import Swiper from "swiper/bundle";

const listNames = document.querySelectorAll("h1.header__title");
let nameText = [...listNames].map((item) => item.textContent);

const swiper = new Swiper(".swiper", {
  effect: "fade",

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return `<span class="${className}">
        <p class="${className}-content">0 ${index + 1} <span class="${className}-name">
          ${nameText[index]}</span>
        </p>
      </span>`;
    },
  },
});

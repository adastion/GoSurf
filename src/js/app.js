import Swiper, { Navigation, Pagination } from "swiper";

const listNames = document.querySelectorAll("h1.header__title");
let nameText = [...listNames].map((item) => item.textContent);


// header
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
  },
  effect: "fade",


  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return `<span class="${className}">
              <p class="${className}-content">0 ${
        index + 1
      } <span class="${className}-name">
          ${nameText[index]}</span>
        </p>
      </span>`;
    },
  },
});

// surf
const swiperSurf = new Swiper(".swiper2", {
  autoplay: {
    delay: 2000,
  },
  effect: "fade",

  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,

  // loop: true,

  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${className}--${index + 1}"></span>`
    },
  },
});

console.log(swiperSurf.pagination.bullets)
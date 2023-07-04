"use strict";
//Init slider header
import Swiper, { Navigation, Pagination } from "swiper";
const nameCard = [...document.querySelectorAll(".name-slide")].map(
  (item) => item.textContent
);

const swiperHeader = new Swiper(".slider-header", {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">
        <span>0${index + 1}</span>
        <span class="${className}-name">${nameCard[index]}</span>
      </div>`;
    },
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

//Init slider cards surf
const swiperCardsSurf = new Swiper(".slider-cards-beach", {
  modules: [Navigation, Pagination],
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

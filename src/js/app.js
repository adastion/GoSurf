import Swiper, { Navigation, Pagination } from 'swiper';

const swiperHeader = new Swiper(".slider-header", {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
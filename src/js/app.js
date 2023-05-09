import Swiper from "swiper/bundle";

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,

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
  },
});

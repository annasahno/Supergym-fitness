import '../vendor/swiper.js';

const swiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  initialSlide: 0,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

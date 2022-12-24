import '../vendor/swiper.js';

document.querySelectorAll('.swiper-slide').forEach((slide) => slide.setAttribute('tabindex', 0));

const swiperTrainers = new Swiper('.trainers__swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev',
  },

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },
});

const swiperReview = new Swiper('.review__swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.review__button-next',
    prevEl: '.review__button-prev',
  },

  autoHeight: true,
  initialSlide: 0,
  slidesPerView: 1,
});

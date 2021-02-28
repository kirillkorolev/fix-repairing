/* eslint-disable */

const examplesSlider = () => {
  const mySwiper = new Swiper(`.examples__slider`, {
    autoheight: true,

    slidesPerView: `auto`,
    watchOverflow: true,
    initialSlide: 2,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: `.examples__button--next`,
      prevEl: `.examples__button--prev`,
    },

    breakpoints: {
      300: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: `auto`,
      }
    }
  });
};

export {examplesSlider};

/* eslint-disable */

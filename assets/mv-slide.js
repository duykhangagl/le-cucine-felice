const swiper = new Swiper(".js-mv", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".js-top-mv-navi--left",
    prevEl: ".js-top-mv-navi--right",
  },
});

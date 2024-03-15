var init;
var swiper;
function iniSwiper(el) {
  if (window.innerWidth <= 1024) {
    if (!init) {
      init = true;
      swiper = new Swiper(".js-rank-slide", {
        loop: true,
        autoplay: true,
        slidesPerView: "auto",
      });
    }
  } else if (init) {
    swiper.destroy();
    swiper = undefined;
    init = false;
  }
}

iniSwiper();

window.addEventListener("resize", () => {
  iniSwiper(swiper);
});

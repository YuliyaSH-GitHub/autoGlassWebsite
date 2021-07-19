const swiper = new Swiper('.b-mainSlider__container', {
    edgeSwipeDetection: true,
    grabCursor: true,
    slideToClickedSlide: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});
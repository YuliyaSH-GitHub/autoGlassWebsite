$(".b-catalog__input").on('focus', function () {
   $(this).parent().addClass('b-catalog__inputDiv_border');
   if (isMobile.any() && window.innerWidth <= 768) {
      $(this).parent().addClass('_hoverMobile');
   }
   if (window.innerWidth > 768) {
      $(this).parent().addClass('_hover');
   }

   $(this).siblings(".b-catalog__inputIcon").css('transform', 'rotate(-180deg)').css('transition', 'transform 0.6s ease 0s');
});

$(".b-catalog__input").on('blur', function () {
   $(this).parent().removeClass('b-catalog__inputDiv_border');
   $(this).parent().removeClass('_hover');
   $(this).parent().removeClass('_hoverMobile');
   $(this).siblings(".b-catalog__inputIcon").css('transform', 'rotate(0deg)').css('transition', 'transform 0.6s ease 0s');
});

$(".b-catalog__inputEurocode").on('focus', function () {
   $(this).parent().addClass('b-catalog__inputDiv_border');

});

$(".b-catalog__inputEurocode").on('blur', function () {
   $(this).parent().removeClass('b-catalog__inputDiv_border');
});


$(".b-request__inputTel").on('focus', function () {
   $(this).addClass('_border');
});

$(".b-request__inputTel").on('blur', function () {
   $(this).removeClass('_border');
});
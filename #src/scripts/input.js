$(".b-catalog__input").on('focus',function() {
    $(this).parent().addClass('b-catalog__inputDiv_border');
 });

 $(".b-catalog__input").on('blur',function() {
    $(this).parent().removeClass('b-catalog__inputDiv_border');
 });
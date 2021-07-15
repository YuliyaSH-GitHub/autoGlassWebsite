$(document).ready(function() {
  $('.b-header__burger').click(function(event) {
    $('.b-header__burger,.b-header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
$(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 300) {
      $('.intro').addClass('hidden');
      console.log('.logo-button')
      $('.logo-button').addClass('visible');
    } else {
      $('.intro').removeClass('hidden');
      $('.logo-button').removeClass('visible');
    }
  })
});

$(function () {
  $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 300){
        $('.intro').fadeOut(1000);
      }else {
        $('.intro').fadeIn(1000);
      }
  })
})
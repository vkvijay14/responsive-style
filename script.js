$(function () {
  // INTRO FADE IN AND OUT
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
  // /INTRO FADE IN AND OUT
  // SLIDE NAV OPEN AND CLOSE
   $('.toggle').click(function (){
      // $('#slideNav').toggle();
      console.log('.toggle')
      $('#slideNav').addClass('show');
  })

   $('#closeButton').click(function (){
      console.log('.closeButton')
      $('#slideNav').removeClass('show');
  })
  // /SLIDE NAV OPEN AND CLOSE
});

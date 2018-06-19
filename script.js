$(function () {

  // INTRO FADE IN AND OUT
  var scrollCheck = $('.intro').offset().top
  // console.log(scrollCheck)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    if(scrollTop > scrollCheck) {
      $('.intro').addClass('hidden');
      $('.logo-button').addClass('visible');
    } else {
      $('.intro').removeClass('hidden');
      $('.logo-button').removeClass('visible');
    }
  })

  // SLIDE NAV OPEN AND CLOSE
  $('.toggle').click(function () {
    // $('#slideNav').toggle();
    console.log('.toggle')
    $('#slideNav').addClass('show');
  })
  $('#closeButton').click(function () {
    console.log('.closeButton')
    $('#slideNav').removeClass('show');
  })
});

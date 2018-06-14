$(function () {
  $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      console.log(scrollTop)
      if (scrollTop > 300){
        $('.intro').animate({
          'opacity': '0',
          'display': 'relative',
          'margin-bottom': '-100px'
        }, '100');

      }else {
        $('.intro').animate({
          'opacity': '1',
          'margin-bottom': '0px'
        })
      }
  })
})
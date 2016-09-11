$(function() {

  function displaySelectFieldsAsBlock() {

    if( $(window).width() <= 750 ) {
      $('.hovereffect .img-responsive').each(function() {
        $(this).attr('src', 'http://placehold.it/768x300');
      });
    }
    if( $(window).width() >= 751 ) {
      $('.hovereffect .img-responsive').each(function() {
        $(this).attr('src', 'http://placehold.it/350x200');
      });
    }

    if( navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 ) {
      if( $(window).width() <= 767 ) {
        $('select.search-select').css({marginTop: "10px"})
      }
      if( $(window).width() >= 520) {
          $('.hidden-sm.btns-first').css({  marginTop: "-176px !important"});
          $('.hidden-sm.btns-second').css({marginTop: "-176px !important"});

      }
      if( $(window).width() >= 992) {
          $('.hidden-sm.btns-first').css({marginTop: "0px !important"});
          $('.hidden-sm.btns-second').css({marginTop: "0px !important"});
      }

    }

  }

  displaySelectFieldsAsBlock();

  $( window ).resize(function() {
    displaySelectFieldsAsBlock();
  });

});

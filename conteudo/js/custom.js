$(function () {
  if (window.location.search == '?page=1') {

      $('footer').addClass('footer-inicial');

      var pg1ImgAltura = $('.abaixo').height();
      var pg1LarguraContainer = $('.pagina1 .container').width();

      $('.footer-inicial').css({
          'bottom': pg1ImgAltura - 100,
          'right': pg1LarguraContainer - 300
      });
  }

  if (window.location.search == '?page=2') { $('footer').addClass('footer-pg2'); }
  if (window.location.search == '?page=3') { $('footer').addClass('footer-pg3'); }

  $('.bt-tablet').click(function(){
    $(this).addClass('visitado');
  });

});
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

  if ($('.pagina1').is(':visible')){
    $('.bt-avancar').attr("href", "?page=2");
  }
  if ($('.pagina2').is(':visible')){
    $('body').css('background-color','#498189');
    $('.bt-avancar').attr("href", "?page=3");
  }
  if ($('.pagina3').is(':visible')){
    $('header').css('background-color','#487f6b');
    $('footer').css('background','url(img/background3.png)');
    $('.bt-avancar').attr("href", "?page=4");
  }
  if ($('.pagina4').is(':visible')){
    $('footer').css('background','#498189');
    $('.bt-avancar').attr("href", "?page=5");
  }
  if ($('.pagina5').is(':visible')){
    $('body').css('background','url(img/background4.png)');
    $('footer').css('background','#5da5b1');
    $('.bt-avancar').attr("href", "?page=6");
  }
  if ($('.pagina6').is(':visible')){
    $('footer').css('background','#e79623');
    $('.bt-avancar').attr("href", "?page=7");
  }
  if ($('.pagina7').is(':visible')){
    $('body').css('background','url(img/bg-referencias.png)');
    $('.bt-avancar').hide();
  }

  $('.bt-tablet').click(function(){
    $(this).addClass('visitado');
  });

});
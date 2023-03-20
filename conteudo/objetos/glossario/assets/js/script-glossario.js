function resizeBodyGlossario() {
  var largura = 1920;
  var altura = 1080;

  var larguraScreen = $(window).width();
  var alturaScreen = $(window).height();
  var proporcaoAltura = (alturaScreen * 100) / altura;
  var proporcaoLargura = (larguraScreen * 100) / largura;
  var proporcao, larguraAltura, larguraAlturaAuto;

  
  if(proporcaoAltura < proporcaoLargura){
    larguraAltura = "height";
    larguraAlturaAuto = "width";
    proporcao = proporcaoAltura / 100;
  }else{
    larguraAltura = "width";
    larguraAlturaAuto = "height";
    proporcao = proporcaoLargura / 100;
  }
  console.log(proporcao, proporcaoAltura, proporcaoLargura)
  $(".conteudo-glossario").css({
    "transform": "scale("+proporcao+")",
    "transform-origin": "center center"
  });
}


$(document).ready(function () {
  resizeBodyGlossario()
  $(window).resize(function() {
    resizeBodyGlossario()
  })
  $(".tela-inicial-glossario").hide();
  $("#quadrante-01").hide();
  $("#quadrante-02").hide();
  $("#quadrante-03").hide();
  $("#quadrante-04").hide();

  $('.btn-capa').click(function () {
    $(".capa").hide();
    $(".tela-inicial-glossario").show();
  });

  function exibirQuadrante(quadranteId) {
    $(".tela-inicial-glossario").hide();
    $("#quadrante-01").hide();
    $("#quadrante-02").hide();
    $("#quadrante-03").hide();
    $("#quadrante-04").hide();
    $(quadranteId).show();
  }

  $(".lupa1").click(function () {
    exibirQuadrante("#quadrante-01");
  });
  $(".lupa2").click(function () {
    exibirQuadrante("#quadrante-02");
  });
  $(".lupa3").click(function () {
    exibirQuadrante("#quadrante-03");
  });
  $(".lupa4").click(function () {
    exibirQuadrante("#quadrante-04");
  });

  $(".btn-voltar-glosario").click(function () {
    exibirQuadrante(".tela-inicial-glossario");
  });

  $(".lupa1, .lupa2, .lupa3, .lupa4, .btn-voltar-glosario, .btn-menu, .btn, .btn-ampliar").click(function () {
    $('.btn-ampliar').popover('hide');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var myModal = new bootstrap.Modal(document.getElementById('modal-capa-glossario'), {
    keyboard: false
  });
  myModal.show();

  $('.btn-capa').click(function () {
    myModal.hide();
  });

});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(document).ready(function () {
  $(".clicavel-01").click(function () {
    var palavra = $(this).data("palavra");
    $(".lupa1").click();
    $(palavra).click();
    $("#fechar-menu").click();
  });
});

$(document).ready(function () {
  $(".clicavel-02").click(function () {
    var palavra = $(this).data("palavra");
    $(".lupa2").click();
    $(palavra).click();
    $("#fechar-menu").click();
  });
});

$(document).ready(function () {
  $(".clicavel-03").click(function () {
    var palavra = $(this).data("palavra");
    $(".lupa3").click();
    $(palavra).click();
    $("#fechar-menu").click();
  });
});

$(document).ready(function () {
  $(".clicavel-04").click(function () {
    var palavra = $(this).data("palavra");
    $(".lupa4").click();
    $(palavra).click();
    $("#fechar-menu").click();
  });
});
var slider = slider || {};

var navegacaoDiv = $('#navegacao');
var navegacaoMolde = $("#navegacao-molde").html();
var navegacaoTemplate = Handlebars.compile(navegacaoMolde);
var owl;
slider.turmas = {};

var turmaIndex = 0;

slider.init = function(turmas){
  slider.carregarTurmas(turmas);
}

slider.changeCurrentImage = function() {
  var fotoTurmaUrl = slider.turmas[turmaIndex].foto;
  $turma = $('#turma');
  $turma.css("background", "url('" + fotoTurmaUrl + "') center fixed");
  $turma.css("background-size", "cover");
}

slider.nextItem = function() {
  turmaIndex += 1;
  if (turmaIndex == slider.turmas.length) {
    turmaIndex = 0;  
  }
  slider.changeCurrentImage();
}

slider.previousItem = function() {
  turmaIndex -= 1;
  if (turmaIndex < 0) {
    turmaIndex = slider.turmas.length - 1;
  }
  slider.changeCurrentImage();
}

slider.carregarTurmas = function(turmas){
  slider.turmas = turmas;
  var navegacaoHtml = navegacaoTemplate({'turmas': turmas});
  navegacaoDiv.html(navegacaoHtml);
  owl = $('.owl-carousel');
  owl.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive: {
          600:{
            items:4
          },
          900:{
            items:6
          },
          1200:{
            items:7 
          }
        }
   });

  slider.changeCurrentImage();
}


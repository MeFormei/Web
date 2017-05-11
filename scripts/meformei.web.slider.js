var slider = slider || {};

var navegacaoDiv = $('#navegacao');
var navegacaoMolde = $("#navegacao-molde").html();
var navegacaoTemplate = Handlebars.compile(navegacaoMolde);
var owl;
slider.turmas = {};

slider.init = function(turmas){
  slider.carregarTurmas(turmas);
}

slider.changeCurrentImage = function(index) {
  var i = index % slider.turmas.length;
  var fotoTurmaUrl = slider.turmas[i].foto;
  $turma = $('#turma');
  $turma.css("background", "url('" + fotoTurmaUrl + "') no-repeat");
  $turma.css("background-size", "100%");
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

  owl.on('changed.owl.carousel', function(event) {
    var turmaIndex = event.item.index - event.item.count - 1;
    slider.changeCurrentImage(turmaIndex);
  });

  slider.changeCurrentImage(0);
}


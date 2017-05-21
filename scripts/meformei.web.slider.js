var slider = slider || {};
var owl;
slider.turmas = {};

var turmaIndex = 0;

slider.init = function(turmas, inicializar){
  slider.carregarTurmas(turmas, inicializar);
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

slider.carregarTurmas = function(turmas,inicializar){
  slider.turmas = turmas;
  owl = $('.owl-carousel');

  if(inicializar == 'false' || inicializar === false){
      console.log("delete ");
      owl.trigger('destroy.owl.carousel');
  }

  owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
          600: {
              items: 4
          },
          900: {
              items: 6
          },
          1200: {
              items: 7
          }
      }
  });

  slider.changeCurrentImage();
}


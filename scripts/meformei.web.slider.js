var slider = slider || {};
var owl;
slider.turmas = {};
slider.turma = {};
var turmaIndex = 0;

slider.init = function(turmas, resetar){
  slider.carregarTurmas(turmas, resetar);
}

slider.changeCurrentImage = function() {
  if(slider.turmas.length > 0){
      slider.turma = slider.turmas[turmaIndex];
      turmaDetalhes.turma = slider.turmas[turmaIndex];
      var fotoTurmaUrl = slider.turma.foto;
      $turma = $('#turma');
      $turma.css("background", "url('" + fotoTurmaUrl + "') center fixed");
      $turma.css("background-size", "cover");
  }
}

slider.changeCurrentMusic = function(){
    var musicaTurmaUrl = slider.turmas[turmaIndex].musica;
    var musicaTag = $("musica");
    var sourceMusica = $("sourceMusica");
    sourceMusica.src = "sounds/musics/" + musicaTurmaUrl;
    musica.load();
    musica.play();
}

slider.nextItem = function() {
  turmaIndex += 1;
  if (turmaIndex == slider.turmas.length) {
    turmaIndex = 0;  
  }
  slider.changeCurrentImage();
  slider.changeCurrentMusic();
}

slider.previousItem = function() {
  turmaIndex -= 1;
  if (turmaIndex < 0) {
    turmaIndex = slider.turmas.length - 1;
  }
  slider.changeCurrentImage();
}

slider.carregarTurmas = function(turmas, resetar){
  slider.turmas = turmas || [];
  owl = $('.owl-carousel');

  if(resetar != undefined && (resetar == 'true' || resetar === true)){
      owl.trigger('destroy.owl.carousel');
      owl.html(owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
      turmaIndex = 0;
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


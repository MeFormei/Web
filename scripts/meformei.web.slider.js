var slider = slider || {};

var navegacaoDiv = $('#navegacao');
var navegacaoMolde = $("#navegacao-molde").html();
var navegacaoTemplate = Handlebars.compile(navegacaoMolde);

var homenageadosDiv = $('#turma-homenageados');
var homenageadosMolde   = $("#template-homenageados").html();
var homenageadosTemplate = Handlebars.compile(homenageadosMolde);
 
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

slider.changeTurma = function() {
  var turma = slider.turmas[turmaIndex];
  var homenageadosHtml    = homenageadosTemplate(turma);
  homenageadosDiv.html(homenageadosHtml);
  $.getJSON("http://34.211.171.144/backend/api/v1/turmas/"+turma.id+"/alunos")
      .then(alunos => slideralunos.init(alunos))
      .done()
      .fail(() => alert("Falha ao obter dados dos alunos do servidor."));

}

slider.changeCurrentMusic = function()
{
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
  slider.changeTurma();
}

slider.previousItem = function() {
  turmaIndex -= 1;
  if (turmaIndex < 0) {
    turmaIndex = slider.turmas.length - 1;
  }
  slider.changeCurrentImage();
  slider.changeTurma();
}

slider.carregarTurmas = function(turmas){
  slider.turmas = turmas;
  var navegacaoHtml = navegacaoTemplate({'turmas': turmas});
  navegacaoDiv.html(navegacaoHtml);

  var turma = slider.turmas[0];
  var homenageadosHtml    = homenageadosTemplate(turma);
  homenageadosDiv.html(homenageadosHtml);

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


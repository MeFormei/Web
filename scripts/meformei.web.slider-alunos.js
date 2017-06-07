var slideralunos = slideralunos || {};

var carrosselDiv = $('#carrossel-alunos');
var carrosselMolde = $("#carrossel-molde").html();
var carrosselTemplate = Handlebars.compile(carrosselMolde);

var detalhesDiv = $('#detalhes-aluno');
var detalhesMolde = $("#aluno-molde").html();
var detalhesTemplate = Handlebars.compile(detalhesMolde);
  
/*var owl;*/
slideralunos.alunos = {};

var alunoIndex = 0;

slideralunos.init = function(alunos){
  slideralunos.carregaralunos(alunos);
}

slideralunos.changeCurrentImage = function() {
  var aluno = slideralunos.alunos[alunoIndex];
  var alunoHtml    = detalhesTemplate(aluno);
  detalhesDiv.html(alunoHtml);

}

slideralunos.nextItem = function() {
  alunoIndex += 1;
  if (alunoIndex == slideralunos.alunos.length) {
    alunoIndex = 0;  
  }
  slideralunos.changeCurrentImage();
}

slideralunos.previousItem = function() {
  alunoIndex -= 1;
  if (alunoIndex < 0) {
    alunoIndex = slideralunos.alunos.length - 1;
  }
  slideralunos.changeCurrentImage();
}

slideralunos.carregaralunos = function(alunos){
  alunoIndex = 0;
  slideralunos.alunos = alunos;
  var carrosselalunosHtml = carrosselTemplate({'alunos': alunos});
  carrosselDiv.html(carrosselalunosHtml);

  aluno = slideralunos.alunos[0];
  alunoHtml    = detalhesTemplate(aluno);
  detalhesDiv.html(alunoHtml);

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

}


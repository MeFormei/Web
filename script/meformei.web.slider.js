var navegacao = $('#navegacao');
var source   = $("#section-principal-template").html();
var template = Handlebars.compile(source);
var html = template({turmas: turmas});
navegacao.html(html);

var owl = $('.owl-carousel');
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

 function changeCurrentImage(index) {
    var fotoTurmaUrl = turmas[index].foto;
    $turma = $('#turma');
    $turma.css("background", "url('" + fotoTurmaUrl + "') no-repeat");
    $turma.css("background-size", "100%");
 }

 changeCurrentImage(0);

 owl.on('changed.owl.carousel', function(event) {
    var turmaIndex = event.item.index - event.item.count - 1;
    changeCurrentImage(turmaIndex);
    // console.log(event);
    // console.log(turmaIndex);
 });
 $(document).ready(function() {
      $('#fullpage').fullpage({
        sectionsColor: ['#fff', '#F1F1F1', '#F7F7F7'],
        onLeave: function(index, nextIndex, direction){
          if (index == '1'){
            $('.slide-turmas').addClass('aberto');
          } else {
            $('.slide-turmas').removeClass('aberto');
          }

          if (index == '0' || index == '2') {
              isGiraTurma = true;  
          }else{
              isGiraTurma = false;
          }
        },
  });  
});

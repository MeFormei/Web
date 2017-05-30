 $(document).ready(function() {
      $('#fullpage').fullpage({
<<<<<<< HEAD
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
=======
      	sectionsColor: ['#fff', '#F1F1F1', '#F7F7F7'],
      	onLeave: function(index, nextIndex, direction){
      		if (index == '1'){
      			$('.slide-turmas').addClass('aberto');
            isGiraTurma = false;
      		} else {
				    $('.slide-turmas').removeClass('aberto');
            isGiraTurma = true;
      		}
      	},
>>>>>>> ad1318cdefce7121792ff2668b82b126175bdc6e
  });  
});

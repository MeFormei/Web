cameratracker.onLeft(function () {
    owl.trigger('next.owl.carousel');
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

cameratracker.onRight(function () {
    owl.trigger('prev.owl.carousel');
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

cameratracker.onTop(function () {
    $.fn.fullpage.moveSectionUp();
    $('.slide-turmas').addClass('aberto');
    setTimeout(function(){ 
        $('.slide-turmas').addClass('aberto');
    }, 2000);
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

cameratracker.onDown(function () {
    $.fn.fullpage.moveSectionDown();
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

cameratracker.onPosition(function (position) {
    if (position === null) {
        console.log('position null')
        cameraview.toggleFeedbackPanel(false);
        cameraview.drawable = false;
    } else {
        cameraview.toggleFeedbackPanel(true);
        cameraview.drawable = true;
        cameraview.setCoordinates(position.x, position.y);    
    }

    
});
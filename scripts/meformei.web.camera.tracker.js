function updateSoundHorizontal() { 
    var audio = document.getElementById('moveScreenHorizontal');
    var source = document.getElementById('sourceMoveScreenHorizontal');
    source.src = "cursor-move.mp3";
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
}

function updateSoundVertical() { 
    var audio = document.getElementById('moveScreenVertical');
    var source = document.getElementById('sourceMoveScreenVertical');
    source.src = "selection.mp3";
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
}

cameratracker.onLeft(function () {
    owl.trigger('next.owl.carousel');
    updateSoundHorizontal();
});

cameratracker.onRight(function () {
    owl.trigger('prev.owl.carousel');
    updateSoundHorizontal();
});

cameratracker.onTop(function () {
    $.fn.fullpage.moveSectionUp();
    $('.slide-turmas').addClass('aberto');
    setTimeout(function(){ 
        $('.slide-turmas').addClass('aberto');
    }, 2000);
    updateSoundVertical();
});

cameratracker.onDown(function () {
    $.fn.fullpage.moveSectionDown();
    updateSoundVertical();
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

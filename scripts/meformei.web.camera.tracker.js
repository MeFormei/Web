function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var timeoutHandle = null;
var isGiraTurma = true;

async function execOpenedSlider(action) {
    $('.slide-turmas').addClass('aberto');
    $('.slide-turmas').removeClass('fechado');
    await sleep(500);
    action();
    if(timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
    }
    timeoutHandle = window.setTimeout(function(){ 
        $('.slide-turmas').addClass('fechado');
        $('.slide-turmas').removeClass('aberto');
    }, 2000);
}

function updateSoundHorizontal() { 
    var audio = document.getElementById('moveScreenHorizontal');
    var source = document.getElementById('sourceMoveScreenHorizontal');
    source.src = "sounds/effects/cursor-move.mp3";
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
}

function updateSoundVertical() { 
    var audio = document.getElementById('moveScreenVertical');
    var source = document.getElementById('sourceMoveScreenVertical');
    source.src = "sounds/effects/selection.mp3";
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
}

cameratracker.onLeft(function () {
    execOpenedSlider(function() {
        owl.trigger('prev.owl.carousel');
        updateSoundHorizontal();

        if(isGiraTurma) 
            slider.previousItem();

        slideralunos.previousItem();
    });
});

cameratracker.onRight(function () {
    execOpenedSlider(function() {
        owl.trigger('next.owl.carousel');
        updateSoundHorizontal();

        if(isGiraTurma) 
            slider.nextItem();
            
        slideralunos.previousItem();

    });
});

cameratracker.onTop(function () {
    $.fn.fullpage.moveSectionUp();
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

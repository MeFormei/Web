doConnection('localhost', 9001);

onLeft(function () {
    owl.trigger('next.owl.carousel');
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

onRight(function () {
    owl.trigger('prev.owl.carousel');
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

onTop(function () {
    $.fn.fullpage.moveSectionUp();
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

onDown(function () {
    $.fn.fullpage.moveSectionDown();
    // document.write(`<audio controls><source src="sounds/cursor-move.mp3" type="audio/mpeg"></audio>`);
});

onPosition(function (position) {
    if (position === null) {
        toggleFeedbackPanel(false);
        return;
    }

    toggleFeedbackPanel(true);
    setCoordinates(position.x, position.y);
    animate();
});
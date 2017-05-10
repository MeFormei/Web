var cameraview = cameraview || {};

var idDivFeedback = idDivFeedback || "cameraview";
var idDivWrapperCanvas = idDivWrapperCanvas || "cameraview-wrapper" ;
var canvas = document.getElementById(idDivFeedback);
var context = canvas.getContext("2d");
var iterations = 70;
var movementX = 0;
var movementY = 0;
var positionCursorX = 0;
var positionCursorY = 0;

cameraview.init = function(config){
    idDivFeedback = config.canvasId;
    idDivWrapperCanvas = config.wrapperId;
}

cameraview.setCoordinates = function(coordX, coordY) {
    movementX = coordX;
    movementY = coordY;
}

cameraview.animate = function() {
    dx = movementX - positionCursorX;
    dy = movementY - positionCursorY;

    positionCursorX += (dx / iterations);
    positionCursorY += (dy / iterations);

    context.clearRect(0, 0, canvas.width, canvas.height);

    cameraview.drawCircle(positionCursorX, positionCursorY);

    requestAnimationFrame(cameraview.animate);
}

cameraview.drawCircle = function(coordX, coordY) {
    context.beginPath();
    context.arc(coordX, coordY, 20, 0, 2 * Math.PI, true);
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = '#003300';
    context.stroke();
}

cameraview.toggleFeedbackPanel = function(flag) {
    var $feedbackMovement = $(idDivWrapperCanvas);
    if (flag) {
        $feedbackMovement.fadeIn(300);
    } else {
        $feedbackMovement.fadeOut(300);
    }
}
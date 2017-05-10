var idDivFeedback = document.currentScript.getAttribute('id-canvas').toString();
var idDivWrapperCanvas = document.currentScript.getAttribute('id-wrapper-canvas').toString();

var canvas = document.getElementById(idDivFeedback);
var context = canvas.getContext("2d");

var iterations = 70;
var movementX = 0;
var movementY = 0;
var positionCursorX = 0;
var positionCursorY = 0;

function setCoordinates(coordX, coordY) {
    movementX = coordX;
    movementY = coordY;
}

function animate() {
    dx = movementX - positionCursorX;
    dy = movementY - positionCursorY;

    positionCursorX += (dx / iterations);
    positionCursorY += (dy / iterations);

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(positionCursorX, positionCursorY);

    requestAnimationFrame(animate);
}

function drawCircle(coordX, coordY) {
    context.beginPath();
    context.arc(coordX, coordY, 20, 0, 2 * Math.PI, true);
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = '#003300';
    context.stroke();
}

function toggleFeedbackPanel(flag) {
    var $feedbackMovement = $(idDivWrapperCanvas);
    if (flag) {
        $feedbackMovement.fadeIn(300);
    } else {
        $feedbackMovement.fadeOut(300);
    }
}
const TOPIC_DIRECTION = 'direction';
const TOPIC_POSITION = 'position';
const TOPIC_STATUS = 'status';

var client;
var callbacks = {'WEST':null,'EAST':null,'NORTH':null,'SOUTH':null}
var canvas = document.getElementById('feedback');
var context = canvas.getContext("2d");

const WIDTH_FACTOR = 0.3333; 
const HEIGHT_FACTOR = 0.3333;


function doConnection(ip, port){
	client = mqtt.connect('mqtt://' + ip + ':' + port);

	client.on('connect', function () {
		console.log('Realizada com sucesso!');
	  client.subscribe(TOPIC_DIRECTION);
		client.subscribe(TOPIC_POSITION);
	});

	client.on('message', function(topic, payload){
		topicStr = topic.toString();
		payloadStr = payload.toString();
		
		if(topicStr === TOPIC_DIRECTION){
			
			callbacks[payloadStr](); // calls callback function

		} 
		else if (topicStr === TOPIC_POSITION) {
			
			if(payloadStr == 'none'){
				toggleFeedbackPanel(false);
				return;
			}

			toggleFeedbackPanel(true);
			coord = JSON.parse(payloadStr);
			onCoordinates(coord.x, coord.y);
			console.log(coord.x +" - "+ coord.y);

		}
	});
}


function onCoordinates(coordX, coordY) {
	var relativeX = coordX * WIDTH_FACTOR;
	var relativeY = coordY * HEIGHT_FACTOR;

	context.clearRect(0, 0, canvas.width, canvas.height);
 	drawCircle(relativeX.toPrecision(2), relativeY.toPrecision(2));
}


function drawCircle(relativeX, relativeY) {

	context.beginPath();
	context.arc(relativeX, relativeY, 20, 0, 2 * Math.PI, true);
	context.fillStyle =  "green";
	context.fill();
	context.strokeStyle = '#003300';
	context.stroke();

	requestAnimationFrame(drawCircle);
}

function toggleFeedbackPanel(flag) {
	if (flag == false)
		$(".feedback-movement").fadeOut(300);
		
	if (flag == true)
		$(".feedback-movement").fadeIn(300);
}


function onLeft(callback){
	callbacks['WEST'] = callback;
}

function onRight(callback){
	callbacks['EAST'] = callback;
}

function onTop(callback){
	callbacks['NORTH'] = callback;
}

function onDown(callback){
	callbacks['SOUTH'] = callback;
}

const TOPIC_DIRECTION = 'direction';
const TOPIC_POSITION = 'position';

var client;
var callbacks = {'WEST':null,'EAST':null,'NORTH':null,'SOUTH':null}
var canvas = document.getElementById('feedback');
var context = canvas.getContext("2d");



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
		} else if (topicStr === TOPIC_POSITION) {
			coord = JSON.parse(payloadStr);
			onCoordinates(coord.x, coord.y);
			console.log(JSON.parse(payloadStr));
		}
	});
}


function onCoordinates(coordX, coordY) {
	var relativeX = coordX / canvas.width; 
	var relativeY = coordY / canvas.height;
	var radius = 70;

 	context.beginPath();
	context.arc(relativeX, relativeY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = 'green';
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = '#003300';
	context.stroke();	
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

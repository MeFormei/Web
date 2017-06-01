const TOPIC_DIRECTION = 'direction';
const TOPIC_POSITION = 'position';
var callbacks = { 'direction':{'WEST':null,'EAST':null,'NORTH':null,'SOUTH':null}, 'position':null };
var socket = {};
var cameratracker = cameratracker || {};

cameratracker.init = function(config){
	cameratracker.doConnection(config.ip, config.port);
}

cameratracker.doConnection = function(ip, port) {
	socket = new WebSocket('ws://' + ip + ':' + port + '/');

	socket.onopen = function(event) {
		console.log('Realizada com sucesso!');
	}

	socket.onmessage = function(event) {
		var strMessage = event.data;
		var message = JSON.parse(strMessage);
		
		var topic = message.topic;
		var data = message.data;
		
		if(topic === TOPIC_DIRECTION){

			callbacks[TOPIC_DIRECTION][data](); // calls callback function

		} else if (topic === TOPIC_POSITION) {

		    if(data === 'none'){
				callbacks[TOPIC_POSITION](null); // calls callback function with no position
			} else {
		        var position = JSON.parse(data);
		        callbacks[TOPIC_POSITION](position); // calls callback function with the received position
            }

		}
	}
}

cameratracker.onLeft = function(callback){
	callbacks[TOPIC_DIRECTION]['WEST'] = callback;
}

cameratracker.onRight = function(callback){
	callbacks[TOPIC_DIRECTION]['EAST'] = callback;
}

cameratracker.onTop = function(callback){
	callbacks[TOPIC_DIRECTION]['NORTH'] = callback;
}

cameratracker.onDown = function(callback){
	callbacks[TOPIC_DIRECTION]['SOUTH'] = callback;
}

cameratracker.onPosition = function(callback) {
    callbacks[TOPIC_POSITION] = callback;
}

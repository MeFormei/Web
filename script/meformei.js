const TOPIC_DIRECTION = 'direction';
const TOPIC_POSITION = 'position';

var client;
var callbacks = {'WEST':null,'EAST':null,'NORTH':null,'SOUTH':null}

function doConnection(ip,port){
	client = mqtt.connect('mqtt://' + ip + ':' + port);
	client.on('message', function(topic, payload){
		if(topic === TOPIC_DIRECTION){
			callbacks[payload](); // calls callback function
		} else if (topic === TOPIC_POSITION){
			console.log(JSON.parse(payload.toString()));
		}
	})
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
const TOPIC_DIRECTION = 'direction';
const TOPIC_POSITION = 'position';

var client;
var callbacks = {'WEST':null,'EAST':null,'NORTH':null,'SOUTH':null}

function doConnection(ip, port){
	client = mqtt.connect('mqtt://' + ip + ':' + port);

	client.on('connect', function () {
	  client.subscribe(TOPIC_DIRECTION);
		client.subscribe(TOPIC_POSITION);
	});

	client.on('message', function(topic, payload){
		topicStr = topic.toString();
		payloadStr = payload.toString();
		if(topicStr === TOPIC_DIRECTION){
			callbacks[payloadStr](); // calls callback function
		} else if (topicStr === TOPIC_POSITION) {
			console.log(JSON.parse(payloadStr));
		}
	});
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

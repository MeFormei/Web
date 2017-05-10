const TOPIC_DIRECTION = 'direction';
const TOPIC_POSITION = 'position';

var client;
var callbacks = { 'direction':{'WEST':null,'EAST':null,'NORTH':null,'SOUTH':null}, 'position':null };

function doConnection(ip, port){
	client = mqtt.connect('mqtt://' + ip + ':' + port);

	client.on('connect', function () {
		console.log('Realizada com sucesso!');
	  client.subscribe(TOPIC_DIRECTION);
		client.subscribe(TOPIC_POSITION);
	});

	client.on('message', function(topic, payload){
		var topicStr = topic.toString();
		var payloadStr = payload.toString();
		
		if(topicStr === TOPIC_DIRECTION){

			callbacks[TOPIC_DIRECTION][payloadStr](); // calls callback function

		} else if (topicStr === TOPIC_POSITION) {

		    if(payloadStr === 'none'){
				callbacks[TOPIC_POSITION](null); // calls callback function with no position
			} else {
		        var position = JSON.parse(payloadStr);
		        callbacks[TOPIC_POSITION](position); // calls callback function with the received position
            }

		}
	});
}

function onLeft(callback){
	callbacks[TOPIC_DIRECTION]['WEST'] = callback;
}

function onRight(callback){
	callbacks[TOPIC_DIRECTION]['EAST'] = callback;
}

function onTop(callback){
	callbacks[TOPIC_DIRECTION]['NORTH'] = callback;
}

function onDown(callback){
	callbacks[TOPIC_DIRECTION]['SOUTH'] = callback;
}

function onPosition(callback) {
    callbacks[TOPIC_POSITION] = callback;
}

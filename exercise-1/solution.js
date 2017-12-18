function remoteMathService(cb) {
	var one, two;

	var p1 = new Promise(function(resolve,reject){
		callOneService(function(err, num) {
			resolve(num);
		});	
	});

	var p2 = new Promise(function(resolve, reject){
		callTwoService(function(err, num) {
			resolve(num);
		});
	});

	Promise.all([p1, p2]).then( values => cb( undefined , values[0] + values[1]));
}

function callOneService(cb) {
	setTimeout(function() {
		return cb(undefined, 1);
	}, 1000);
}

function callTwoService(cb) {
	setTimeout(function() {
		return cb(undefined, 2);
	}, 1500);
}

remoteMathService(function(err, answer) {

	if (err) console.log("error ", err);

	if (answer !== 3) {
		console.log("wrong answer", answer);
	} else {
		console.log("correct");
	}
});
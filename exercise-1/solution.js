function remoteMathService (cb) {
	Promise.all([callOneService(), callTwoService()]).then( values => cb( undefined , values[0] + values[1]));
}

function callOneService () {
	return new Promise(function(resolve,reject){
		setTimeout ( function () {
			resolve( 1 );
		}, 1000 );
	});
	
}


function callTwoService () {
	return new Promise(function(resolve,reject){
		setTimeout ( function () {
			resolve( 2 );
		}, 1500 );
	});
}

remoteMathService( function (err, answer) {
	if (err) console .log ( "error " , err);

	if (answer !== 3 ) {
		console .log ( "wrong answer" , answer);
	} else {
		console .log ( "correct" );
	}
});
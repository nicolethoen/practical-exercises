var original = require('../modularized-for-testing/original-module.js'),
	solution = require('../modularized-for-testing/solution-module.js'),
	assert = require('assert');
	
describe('original exercise', function() {
	it('should fail to return 3', function() {
		original.remoteMathService(function(err, answer) {
			assert.notEqual(answer, 3)
		});
	});
});

describe('my solution', function() {
	it('should return 3', function(){
		solution.remoteMathService(function(err, answer) {
			assert.equal(answer, 3);
		});
	});
});
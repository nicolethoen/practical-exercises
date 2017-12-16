var original = require('../modularized-for-testing/original-module.js'),
	solution = require('../modularized-for-testing/solution-module.js'),
	assert = require('assert');
	
describe('original exercise', function() {
	it('should fail to return 3', function() {
		original.remoteMathService(function(err, answer) {

			if (err) return false;

			if (answer !== 3) {
				return true;
			} else {
				return false;
			}
	
		});
	});
});

describe('my solution', function() {
	it('should return 3', function(){
		return solution.remoteMathService(function(err, answer) {

			if (err) return false;

			if (answer !== 3) {
				return true;
			} else {
				return false;
			}
	
		});
	});
});
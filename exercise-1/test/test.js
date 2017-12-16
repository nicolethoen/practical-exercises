var original = require('./exercise1-original.js'),
	solution = require('./exercise1.js'),
	assert = require('assert');
	
describe('exercise1-original', function() {
	it('should return 3', function() {
		e1_o.remoteMathService().should.eventually.equal(3);
	});
	//https://mochajs.org/
});
describe('exercise1-solution', function() {
	it('should return 3', function(){
		return e1.remoteMathService().should.eventually.equal(3);
	});
	//https://www.npmjs.com/package/chai-as-promised
});
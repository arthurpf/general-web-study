var compare = require('../src/server/www/scripts/compare.js');

describe('Compare library', function() {
	it('Should return the higher number between 2 numbers', function() {
		assert.equal(compare(2,3), 3);
	});
});
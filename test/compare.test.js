import assert from 'assert';
import compare from '../src/server/www/scripts/compare.js';

describe('Compare library', function() {
	it('Should return the higher number between 2 numbers', function(done) {
		assert.equal(compare(2, 3), 3);
		assert.equal(compare(3, 3), 3);
		assert.equal(compare(3, 2), 3);
		done();
	});
});
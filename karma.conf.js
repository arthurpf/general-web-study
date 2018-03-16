'use strict';

module.exports = (config) => {
	config.set({
		files: ['./**/test/*.test.js'],
		preprocessors: {
			'./test/*.js': ['browserify']
		},
		browserify: {
			debug: true,
			configure: function (bundle) {
				bundle.once('prebundle', function () {
					bundle.transform('babelify');
				});
			}
		},
		browsers: ['Chrome'],
		frameworks: ['mocha', 'browserify']
	});
};
'use strict';

module.exports = (config) => {
	config.set({
		files: ['test/**/*.test.js'],
		preprocessors: {
			'test/**/*.test.js': ['browserify']
		},
		browserify: {
			debug: true,
			transform: [
				['babelify', { presets: ['env'] }]
			]
		},
		browsers: ['Chrome'],
		frameworks: ['browserify', 'mocha']
	});
};
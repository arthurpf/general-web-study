module.exports = {
	entry: './src/server/www/scripts/main.jsx',
	output: {
		filename: './src/server/www/scripts/main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /[\.js, \.jsx]/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	}
};
const webpack = require('webpack');

module.exports = {
	entry: './src/server/www/scripts/main.jsx',
	output: {
		filename: './src/server/www/scripts/main.bundle.js'
	},
	devServer: {
		hot: true,
		contentBase: ['./dist', './src/server/www'],
		after: {


		}
	},
	plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /[\.js, \.jsx]/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ["react-hot-loader/babel"]
					}
				}
			}
		]
	}
};
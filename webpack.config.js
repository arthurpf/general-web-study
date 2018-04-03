const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname,'src/server/www/scripts/main.jsx')
	],
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			 title: 'Output Management',
			 hash: true,
			 template: path.resolve(__dirname, 'src/server/www/index.html')
		})
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
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			}
		]
	}
};
const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./assets/js/index.js", // entry page - if multiple it's an object
	output: { // files that you will deploy
		// path: "public", // which folder to place bundle in
		path: path.resolve(__dirname, 'public'),
		filename: "bundle.js" // name of bundled file
	},
	module: {
		loaders: [ // how we want installed loaders to process our files
			{
				loader: "babel-loader", // handles all our js files
				test: /\.js$/
			},
			{
				loaders: ["style-loader", 'css-loader', 'sass-loader'],
				test: /\.scss$/
			},
			{
				loaders: ["url-loader", "img-loader"],
				test: /\.png$/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "ejs-render-loader!./views/index.ejs"
		})
	]
};

module.exports = webpackConfig;

var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./views/index.js", // entry page - if multiple it's an object
	output: { // files that you will deploy
		path: "public", // which folder to place bundle in
		filename: "bundle.js" // name of bundled file
	},
	module: {
		loaders: [ // how we want installed loaders to process our files
			{
				loader: "babel-loader" // handles all our js files
				test: /\.js$/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.ejs"
		})
	]
};

module.exports = webpackConfig;

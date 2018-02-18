const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./assets/js/index.js", // entry page - if multiple it's an object
	output: { // files that you will deploy
		path: path.resolve(__dirname, 'public'), // which folder to place bundle in
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
				 test:/\.(s*)css$/,
			},
			// {
			// 	loaders: ["url-loader", "img-loader"],
			// 	test: /\.png$/
			// },
			{
            test: /\.(png|jp(e*)g|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'img/[hash]-[name].[ext]'
                }
            }]
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



/**
// @TODO
// autoprefix css: https://github.com/passy/autoprefixer-loader - already installed npm package
// images without relative path (=absolute)
// compress images: https://github.com/tcoopman/image-webpack-loader
*/

var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'],
	output: {
		path: __dirname,
		filename: "./build/bundle.js"
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],	
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Navbar: 'app/components/Navbar.jsx',
			About: 'app/components/About.jsx',
			Display: 'app/components/Display.jsx',
			GroupSelect: 'app/components/GroupSelect.jsx',
			VarView: 'app/components/VarView.jsx',
			Help: 'app/components/Help.jsx',
			applicationStyles: 'app/styles/app.scss'
//			ErrorModal: 'app/components/ErrorModal.jsx',
		},
		extensions: ['','.js','.jsx']
	},
	module: {
		preLoaders: [
			{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "jshint-loader"
			}
		],
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}
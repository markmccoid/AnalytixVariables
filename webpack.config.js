var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.js'],
	output: {
		path: __dirname,
		filename: './build/bundle.js'
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
		modulesDirectories: [
			'node_modules',
			'./app/components',
			'./app/API'
		],
		alias: {
			applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.js',
			reducers: 'app/reducers/reducers.js',
			configureStore: 'app/store/configureStore.js'
//			ErrorModal: 'app/components/ErrorModal.jsx',
		},
		extensions: ['','.js','.jsx']
	},
	module: {
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
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};

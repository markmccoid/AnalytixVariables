module.exports = {
	entry: "./app/app.js",
	output: {
		path: __dirname,
		filename: "./build/bundle.js"
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Navbar: 'app/components/Navbar.jsx',
			About: 'app/components/About.jsx',
			GroupSelect: 'app/components/GroupSelect.jsx',
			VarView: 'app/components/VarView.jsx'
//			ErrorModal: 'app/components/ErrorModal.jsx',
//			applicationStyles: 'app/styles/app.scss'
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
	}

	
}
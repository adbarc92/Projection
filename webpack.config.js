const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			{
				test: /\.(scss|css)$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
	],

	resolve: {
		alias: {
			react: path.join(__dirname, 'node_modules', 'react'),
		},
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist', 'public'),
		compress: true,
		hot: true,
		liveReload: true,
		open: true,
		openPage: '',
	},
};

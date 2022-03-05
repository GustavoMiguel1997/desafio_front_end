const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
        },
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('./dist/index.html') }),
  ],
};

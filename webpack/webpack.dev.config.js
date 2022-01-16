const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
];

module.exports = {
  target: 'web',
  devtool: false,
  mode: 'development',
  entry: ['./src/index.tsx'],
  plugins,
  output: {
    path: path.resolve(process.cwd(), './dist'),
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
};

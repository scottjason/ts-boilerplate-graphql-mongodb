const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  performance: { hints: false },
  externals: [nodeExternals()],
};

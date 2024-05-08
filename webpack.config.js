const path = require('path');

module.exports = {
  entry: './assets/ts/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static/js'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

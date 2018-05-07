const webpack = require('webpack');
const PATHS = require('./paths');
const externals = require('./externals');
const resolve = require('./resolve');
const hotMiddlewareScript =
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

const node = { __dirname: true, __filename: true };
module.exports = {
  mode: 'development',
  context: __dirname,
  target: 'node',
  externals,
  resolve,
  entry: {
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    server: [
      hotMiddlewareScript,
      // And then the actual application
      '../server/server.js',
      'babel-polyfill',
    ],
    client: [
      hotMiddlewareScript,
      // And then the actual application
      '../client/index.js',
      'babel-polyfill',
    ],
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].dev.js',
  },
  devtool: '#source-map',
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
};

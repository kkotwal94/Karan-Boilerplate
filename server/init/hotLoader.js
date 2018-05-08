import webpack from 'webpack';
import webpackConfig from '../../webpack/webpack.config';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';

export default app => {
  const webpackCompiled = webpackConfig();
  const compiler = webpack(webpackCompiled);

  app.use(
    webpackDevMiddleWare(compiler, {
      logLevel: 'warn',
      publicPath: webpackCompiled.output.publicPath,
    })
  );

  app.use(
    webpackHotMiddleWare(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    })
  );
};

import webpack from 'webpack';
import webpackConfig from '../../webpack/webpack.config';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';

export default (app, isDebug) => {
  if (isDebug) {
    const webpackCompiled = webpackConfig({ browser: true });
    const compiler = webpack(webpackCompiled);

    app.use(
      webpackDevMiddleWare(compiler, {
        logLevel: 'warn',
        publicPath: webpackCompiled.output.publicPath,
      })
    );

    app.use(webpackHotMiddleWare(compiler));
  }
};
